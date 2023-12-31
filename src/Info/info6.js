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
            {/* 사전에 부여된 숫자 입력 횟수만큼 숫자를 입력할 수 있어.
            숫자를 입력할 때 작성하는 개인 비밀번호는 나중에 본인이 입력한 번호를 조회할 때 필요해!<br/>
            다른 사람들이 검색해볼 수 없게 본인만 아는 번호로 입력하는게 좋아!            */}
            수로 점수가 높은 아깅이들은 기존방식과 달라져 패널티를 받았다고 생각할 수 있을 것 같아!
대신 수로 점수 4000점이 넘는 아깅이들에게는 당첨여부와는 관계없이 모두 솔 에르다 조각을 1개씩 지급할게! 
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
