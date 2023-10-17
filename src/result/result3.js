import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './result.css';
import axios from 'axios';

function Result3() {
    const [prizeWinners, setPrizeWinners] = useState([]);
    const [errorText, setErrorText] = useState(""); // 추가
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://43.201.175.42:8080/api/numbers/prize');
          const data = response.data;
  
          setPrizeWinners(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setErrorText("아직 당첨 추첨 시간이 아닙니다! 참가상 추첨은 10/29(일) 22:00에 진행됩니다"); // 에러 메시지 설정
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="info-container">
        <div className="info-content">
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image"
          />
          <div className="info-text-container">
            <p className="info-paragraph">
              {prizeWinners.length === 3 ? (
                <>
                  {/* 첫 번째 당첨자 */}
                  <span>1번 참가상 당첨자: {prizeWinners[0]}</span><br/>
                  {/* 두 번째 당첨자 */}
                  <span>2번 참가상 당첨자: {prizeWinners[1]}</span><br/>
                  {/* 세 번째 당첨자 */}
                  <span>3번 참가상 당첨자: {prizeWinners[2]}<br/>
                  참가상 보상은 솔에르다조각 2개야!
                  정말 축하해!
                  </span>
                </>
              ) : (
                <span>
                  {errorText ? errorText : "데이터를 불러오는 중입니다..."} {/* 에러 메시지 표시 */}
                </span>
              )}
            </p>
          </div>
  
          <div className="additional-image-container">
            <img
              src="https://i.imgur.com/NAxvxQA.png"
              alt="반디"
              className="additional-image-bandi"
            />
            <img
              src="https://i.imgur.com/nWfHbAt.png"
              alt="반디스크립트"
              className="additional-image-bandiname"
            />
            <Link to="/result2">
              <img
                src="https://i.imgur.com/o3zxrEN.png"
                alt="이전"
                className="additional-image-2"
              />
            </Link>
            <Link to="/get">
              <img
                src="https://i.imgur.com/uXGxKqq.png"
                alt="대화그만하기"
                className="additional-image-4"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
export default Result3;
