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
          <h1 className="info-title"></h1>
          <p className="info-paragraph">
            상단의 '금고결과' 메뉴에서 카운트다운이 완료되고 나면, 금고 당첨자와 전체 금고 입력값을 확인할 수 있어.
            비밀번호는 간부진들이 이벤트의 진행상황을 보기 위해 있는거라 간부진들만 접근이 가능해!
            
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
          <Link to="/info5"> 
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
          </Link>
          <Link to="/info7"> 
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
