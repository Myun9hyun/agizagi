import React from 'react';
import { Link } from 'react-router-dom';
import './info.css'; // info.css 파일을 import

function Info() {
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
          <h1 className="info-title"></h1> {/* info.css에서 정의한 클래스를 적용 */}
          <p className="info-paragraph">
            자 이제 다들 금고보상을 위한 눈치싸움을 시작해보자!
          </p> {/* info.css에서 정의한 클래스를 적용 */}
        </div>

        {/* 링크 */}
       

        {/* 추가 이미지 */}
        <div className="additional-image-container">
          <img
              src="https://i.imgur.com/6YzvCDc.png"
              alt="샴푸"
           className="additional-image-shampoo"
           />
           <img
            src="https://i.imgur.com/FrK8R0S.png"
            alt="릎샴스크립트"
            className="additional-image-ln"
          />
          <Link to="/info7"> 
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
          </Link>
          <Link to="/"> 
          <img
            src="https://i.imgur.com/r6bhT2f.png"
            alt="확인"
            className="additional-image-3"
          />
        </Link>
        <Link to="/"> {/* 다음 이미지 클릭 시 /info2로 이동 */}
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

export default Info;
