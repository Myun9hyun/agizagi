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
          <h1 className="info-title">아기자기 금고에 온것을 환영해!</h1> 
          <p className="info-paragraph">
            아기자기 금고의 사용법을 알려줄게
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
