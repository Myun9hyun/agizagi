import React from 'react';
import { Link } from 'react-router-dom';
import './info.css'; 

function Info() {
  return (
    <div className="info-container">
      <div className="info-content">
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image"
          />        
        <div className="info-text-container">
          {/* 텍스트 내용 */}
          <h1 className="info-title"></h1>
          <p className="info-paragraph">
            참가한 아깅이들 중에서 추첨을 통해 3명에게 참가상으로 '솔에르다 조각' 2개씩 지급하려고 해!<br/> 당첨자는 참가상을 중복 수령할 수 없어
            
          </p>
        </div>
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
          <Link to="/info2"> 
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
          </Link>
          <Link to="/info4"> 
          <img
            src="https://i.imgur.com/8RJpXyn.png"
            alt="다음"
            className="additional-image-3"
          />
        </Link>
        <Link to="/">
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

export default Info;
