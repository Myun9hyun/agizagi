import React from 'react';
import { Link } from 'react-router-dom';
import './bird.css'; 

function Bird() {
  return (
    <div className="bird-container">
      <div className="bird-content">
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="bird-image"
          />
        <div className="bird-text-container">
          <p className="bird-paragraph">
            짹짹

          </p>
        </div>
        <div className="additional-image-container">
          <img
            src="https://i.imgur.com/x6ErwDA.png"
            alt="종달새"
            className="additional-image-j"
          />
          <img
            src="https://i.imgur.com/sYToTyk.png"
            alt="둥둥향스크립트"
            className="additional-image-dn"
          />
          <Link to="/comment2">
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

export default Bird;
