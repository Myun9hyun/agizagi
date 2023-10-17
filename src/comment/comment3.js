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
            혹시나 버그가 있다면 다음의 링크를 눌러서 꼭 제보 부탁해!{" "}
            {/* "둥둥향에게 연락하기"를 클릭하여 www.naver.com으로 이동 */}
            <Link to="https://open.kakao.com/o/sl6WBJUc" target="_blank">
              둥둥향에게 연락하기
            </Link>
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
