import React, { useState, useEffect } from 'react';
import './numberget.css';
import Modal from '../modal/Modal';
import ModalWhole from '../modal/Modalwhole';
import Countdown from '../countdown/countdown.js';
import PassInput from '../passinput/passinput.js';
import { Link } from 'react-router-dom';

function NumberGet() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalWholeOpen, setIsModalWholeOpen] = useState(false);
  const [isVaultOpen, setIsVaultOpen] = useState(false); // 추가: 금고 열림 상태

  useEffect(() => {
    if (isPasswordCorrect && isVaultOpen) {
      setIsModalWholeOpen(true);
    }
  }, [isPasswordCorrect, isVaultOpen]); // 수정: isVaultOpen을 의존성 배열에 추가

  const handlePasswordCheck = (password) => {
    if (password === '970808') {
      setIsPasswordCorrect(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="claw-machine-container">
      <div className="image-container">
        {/* 1번 이미지 */}
        <div style={{ display: isPasswordCorrect || isVaultOpen ? 'block' : 'none' }}>
          <div className="image-overlay">
            <Link to="/result">
              <img
                src="https://i.imgur.com/aB6MR4R.gif"
                alt="금고결과퀘스트창"
                className="custom-image-1"
                onClick={() => setIsModalOpen(true)}
              />
            </Link>
            <img
              src="https://i.imgur.com/NAxvxQA.png"
              alt="반디"
              className="custom-image-3"
              onClick={() => setIsModalWholeOpen(true)}
            />
            <img
                src="https://i.imgur.com/sTueI5C.png"
                alt="아기자기엔피시"
                className="overlapping-image-bn"
            />
            <img
                src="https://i.imgur.com/vF0zfoC.png"

              alt="금고결과보기엔피시"
              className="overlapping-image-bd"
            />
            {/* <p className="image-description-b">아기자기</p>
            <p className="image-description-data">금고결과보기</p> */}
          </div>
        </div>
        {/* 2번 이미지 */}
        <div style={{ display: isPasswordCorrect || isVaultOpen ? 'block' : 'none' }}>
          <img src="https://i.imgur.com/mC722y9.png" alt="클로 머신" className="image-style-1" />

          <div className="image-group-2">
            <Link to="/resultdata">
              <img
                src="https://i.imgur.com/aB6MR4R.gif"
                alt="금고데이터퀘스트창"
                className="custom-image-2"
                onClick={() => setIsModalWholeOpen(true)}
              />
            </Link>
            <img
              src="https://i.imgur.com/hPjWbAr.png"
              alt="영래"
              className="custom-image-4"
              onClick={() => setIsModalWholeOpen(true)}
            />
            <img
                src="https://i.imgur.com/Azq0UFX.png"
              alt="영래곰엔피시"
              className="overlapping-image-yn"
            />
            <img
                src="https://i.imgur.com/9ZzZzcp.png"
              alt="전체결과보기엔피시"
              className="overlapping-image-yw"
            />
            {/* <p className="image-description-y">영래곰</p>
            <p className="image-description-whole">전체데이터보기</p> */}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '200px' }}>
        {!isPasswordCorrect && !isVaultOpen && <PassInput onPasswordCheck={handlePasswordCheck} />} {/* 수정: isVaultOpen 상태에 따라 PassInput을 표시/숨김 */}
      </div>
      {!isPasswordCorrect && (
        <Countdown
          onVaultOpen={() => {
            setIsVaultOpen(true); // 추가: 금고 열림 상태 업데이트
          }}
        />
      )}
    </div>
  );
}

export default NumberGet;
