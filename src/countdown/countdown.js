import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment-timezone';
import './countdown.css';
import Footer from '../footer/footer';

function Countdown({ onVaultOpen }) {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [vaultOpenTime, setVaultOpenTime] = useState('');

  const timerRef = useRef(null);

  const koreaTime = moment.tz('Asia/Seoul');
  const targetTime = moment.tz('2023-12-31 22:00', 'Asia/Seoul');

  const startCountdown = () => {
    const duration = moment.duration(targetTime.diff(koreaTime));
    const totalSeconds = Math.max(0, Math.floor(duration.asSeconds()));

    setRemainingSeconds(totalSeconds);

    if (totalSeconds === 0) {
      setIsVaultOpen(true);
      onVaultOpen(); // 금고가 열리면 콜백 호출
    } else {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(timerRef.current);
            setIsVaultOpen(true);
            onVaultOpen(); // 금고가 열리면 콜백 호출
            return 0;
          }
        });
      }, 1000);
    }
  };

  useEffect(() => {
    startCountdown();
    setVaultOpenTime(targetTime.format('MM월 DD일 HH시 mm분')); // 열리는 시간 정보 설정

    return () => {
      clearInterval(timerRef.current);
    };
  }, [onVaultOpen]);

  return (
    <div className="countdownHolder">
      {/* {!isVaultOpen && <ModalWhole />}
      {!isVaultOpen && <Modal />} */}

      {!isVaultOpen && (
        <div>
          <countp>금고는 {vaultOpenTime} 에 열립니다!</countp>
          {/* <br/> */}
          <p>남은 시간</p>

          {/* 여기에 나머지 카운트다운 요소들을 추가 */}
          <div className="position countDiv">
            <span className="digit">{Math.floor(remainingSeconds / 3600)}</span>
          </div>
          <div className="position countDiv">
            <span className="digit">시</span>
          </div>
          <div className="position countDiv">
            <span className="digit">
              {String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0')}
            </span>
          </div>
          <div className="position countDiv">
            <span className="digit">분</span>
          </div>
          <div className="position countDiv">
            <span className="digit">{String(remainingSeconds % 60).padStart(2, '0')}</span>
          </div>
          <div className="position countDiv">
            <span className="digit">초</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Countdown;
