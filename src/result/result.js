import React from 'react';
import { Link } from 'react-router-dom';
import './result.css'; // info.css 파일을 import

function Result() {
  return (
    <div className="info-container">
      {/* 이미지와 텍스트 컨테이너 */}
      <div className="info-content">
        {/* 이미지 */}
        {/* <Link to="/">  */}
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image" // info.css에서 정의한 클래스를 적용
          />
        {/* </Link> */}
        
        {/* 이미지 내부 텍스트 */}
        <div className="info-text-container"> {/* info.css에서 정의한 클래스를 적용 */}
          {/* 텍스트 내용 */}
          <h1 className="info-title">금고 당첨자는 다음과 같아!</h1> {/* info.css에서 정의한 클래스를 적용 */}
          <p className="info-paragraph">
            당첨자는 과연! 두구두구..
          </p> {/* info.css에서 정의한 클래스를 적용 */}
        </div>

        {/* 링크 */}
        

        {/* 추가 이미지 */}
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
          <Link to="/result2"> {/* 다음 이미지 클릭 시 /info2로 이동 */}
            <img
                src="https://i.imgur.com/8RJpXyn.png"
                alt="다음"
                className="additional-image-3"
            />
            </Link>
            <Link to="/get"> {/* 다음 이미지 클릭 시 /info2로 이동 */}
            <img
                src="https://i.imgur.com/uXGxKqq.png"
                alt="대화그만하기"
                className="additional-image-4"
            />
            </Link>
        </div>
      </div>

      {/* 홈으로 이동하는 링크 (바깥에 위치) */}
      {/* <Link to="/" className="info-link">홈으로 이동</Link> */}
    </div>
  );
}

export default Result;
