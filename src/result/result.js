import React from 'react';
import { Link } from 'react-router-dom';
import './result.css';

function Result() {
  return (
    <div className="info-container">
      <div className="info-content">
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image"
          />
        <div className="info-text-container">
          <h1 className="info-title">금고 당첨자는 다음과 같아!</h1>
          <p className="info-paragraph">
            당첨자는 과연! 두구두구..
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

export default Result;
