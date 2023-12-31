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
          <p className="info-paragraph">
          당첨자 및 참가상에 뽑힌 아깅이들은 다음날 택배로 보상을 일괄 지급할게!
당첨자 택배함이 가득차서 보상 수령이 불가능한 경우에는 그 다음 낮은 숫자를 쓴 아깅이가 당첨자가 될거야.
그러니까 꼭! 잊지말고 택배함 비워두도록해!          </p>
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
          <Link to="/result3">
          <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
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
