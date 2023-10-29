import React from 'react';
import { Link } from 'react-router-dom';
import './comment.css';

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
          <p className="info-paragraph">
            앞으로도 기부해주는 코어젬스톤은 이 금고 이벤트와 같이 길드의 이벤트를 위해 활용할게!
            다시 한 번 간부진들 모두 기부해준 아깅이들에게 고맙다는 말을 전하고 싶어!    

          </p>
        </div>
        <div className="additional-image-container">
          <img
            src="https://i.imgur.com/yq4qMwz.png"
            alt="둥둥향"
            className="additional-image-d"
          />
           <img
            src="https://i.imgur.com/sYToTyk.png"
            alt="둥둥향스크립트"
            className="additional-image-dn"
          />
        <Link to="/comment2">
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
        </Link>

          <Link to="/comment4">
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
