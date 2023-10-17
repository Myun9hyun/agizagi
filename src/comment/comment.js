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
            안녕! 아기자기 금고에 온걸 환영해! 나는 둥둥향이야. 이 금고 페이지를 만들었지
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
