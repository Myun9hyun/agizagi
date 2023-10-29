import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './result.css'; // result.css 파일을 import
import axios from 'axios'; // Axios를 import

function Result2() {
  const [data, setData] = useState(null); // 데이터 관리

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 서버에서 가져옵니다.
    const fetchData = async () => {
      try {
        // 데이터를 조회하고 data 상태에 저장
        const response = await axios.get('http://43.201.175.42:8080/api/numbers/min');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

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
            {data ? (
              // 데이터가 있을 경우 데이터를 표시
              <span>당첨자는 '{data.nickname}'야! 정말 축하해! <br/>'{data.nickname}'는 가장 낮은 숫자인 '{data.number}' 를 작성했어!<br/>
              당첨자 상품은 솔에르다조각 30개야</span>
            ) : (
              // 데이터가 없을 경우 로딩 메시지 표시
              <span>데이터를 불러오는 중입니다...</span>
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
        <Link to="/result">
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
        </Link>
          <Link to="/result3"> 
            <img
                src="https://i.imgur.com/8RJpXyn.png"
                alt="다음"
                className="additional-image-3"
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

export default Result2;
