import React from 'react';
import { Link } from 'react-router-dom';
import './resultdata.css'; 

function ResultData() {
  return (
    <div className="info-container">
      <div className="info-content">

          <img
            src="https://i.imgur.com/QNIaPn1.png"
            alt="퀘스트창"
            className="info-image"
          />
        <div className="info-text-container"> 
          <h1 className="info-title">금고 전체 데이터가 궁금해?</h1> 
          <p className="info-paragraph">
            금고 데이터는 다음 버튼을 누르면 보여줄게
            </p> 
        </div>
        <div className="additional-image-container">
          <img
            src="https://i.imgur.com/hPjWbAr.png"
            alt="영래"
            className="additional-image-youngrae"
          />
          <img
            src="https://i.imgur.com/cI4jH9G.png"
            alt="영래스크립트"
            className="additional-image-youngname"
          />
          <Link to="/resultdata2"> 
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

export default ResultData;
