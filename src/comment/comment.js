import React from 'react';
import { Link } from 'react-router-dom';
import './comment.css'; // info.css 파일을 import

function Info() {
  return (
    <div className="info-container">
      {/* 이미지와 텍스트 컨테이너 */}
      <div className="info-content">
        {/* 이미지 */}
        {/* <Link to="/">  */}
          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image" // info.css에서 정의한 클래스를 적용
          />
        {/* </Link> */}
        
        {/* 이미지 내부 텍스트 */}
        <div className="info-text-container"> {/* info.css에서 정의한 클래스를 적용 */}
          {/* 텍스트 내용 */}
          {/* <h1 className="info-title">아기자기 금고에 온것을 환영해!</h1>  */}
          <p className="info-paragraph">
            안녕! 아기자기 금고에 온걸 환영해! 나는 둥둥향이야. 이 금고 페이지를 만들었지
          </p> {/* info.css에서 정의한 클래스를 적용 */}
        </div>

        {/* 링크 */}
        {/* <div className="info-link-container">
          <Link to="/"> 
            <img
              src="https://i.imgur.com/uXGxKqq.png"
              alt="대화그만하기"
              className="info-image-icon"
            />
          </Link>
        </div> */}

        {/* 추가 이미지 */}
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
          {/* <img
            src="https://i.imgur.com/o3zxrEN.png"
            alt="이전"
            className="additional-image-2"
          /> */}
          <Link to="/comment2"> {/* 다음 이미지 클릭 시 /info2로 이동 */}
            <img
                src="https://i.imgur.com/8RJpXyn.png"
                alt="다음"
                className="additional-image-3"
            />
            </Link>
            <Link to="/"> {/* 다음 이미지 클릭 시 /info2로 이동 */}
            <img
                src="https://i.imgur.com/uXGxKqq.png"
                alt="대화그만하기"
                className="additional-image-4"
            />
            </Link>
        </div>
      </div>

      {/* 홈으로 이동하는 링크 (바깥에 위치) */}
      {/* <Link to="/" className="info-link">홈으로 이동</Link> */}
    </div>
  );
}

export default Info;
