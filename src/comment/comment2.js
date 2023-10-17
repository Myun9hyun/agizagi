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
            아깅이들을 위해 열심히 만들어보았어! 부족하지만 재미있게 즐겨보길 바래!
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
        <Link to="/comment">

          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          />
        </Link>

          <Link to="/comment3">
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
