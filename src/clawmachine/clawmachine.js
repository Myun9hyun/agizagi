import React from 'react';
import './clawmachine.css'; // 이미지 스타일을 가져옴
import Footer from '../footer/footer';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트를 가져옴
import Info from '../Info/info'; // Info 컴포넌트를 import
import Comment from '../comment/comment'
function App() {
  return (
    <div className="claw-machine-container">
      {/* 이미지 컨테이너 내용 */}
      <div className="image-container">
        {/* 기존 이미지 */}
        <img src="https://i.imgur.com/mC722y9.png" alt="클로 머신" className="image-style" />
        {/* 이미지와 추가 이미지를 같은 컨테이너로 감싸서 위치를 고정 */}
        <div className="image-overlay">
          {/* 추가 이미지 2 - 클릭 시 Info 컴포넌트로 이동 */}
          <Link to="../info">
            <img
              src="https://i.imgur.com/Kb34fYn.gif"
              alt="전구"
              className="overlapping-image-1"
            />
          </Link>
          {/* 추가 이미지 3 */}
          <div className="overlapping-image-2-container">
            <img
              src="https://i.imgur.com/CKan8Br.png"
              alt="샴푸"
              className="overlapping-image-2"
            />
            <img
              src="https://i.imgur.com/gVVdpKq.png"
              alt="릎샴엔피시"
              className="overlapping-image-7"
            />
            <img
              src="https://i.imgur.com/ZtDPcy6.png"
              alt="금고지기엔피시"
              className="overlapping-image-8"
            />
            {/* <p className="image-description-c1">릎샴</p>
            <p className="image-description-c2">금고지기</p> */}

          </div>
        </div>
        <div className="image-overlay-2">
          {/* 추가 이미지 2 - 클릭 시 Info 컴포넌트로 이동 */}
          <Link to="../comment">
            <img
              src="https://i.imgur.com/Kb34fYn.gif"
              alt="전구"
              className="overlapping-image-3"
            />
          </Link>
          {/* 추가 이미지 3 */}
          <div className="overlapping-image-2-container">
            <img
              src="https://i.imgur.com/lI2LBj2.png"
              alt="둥둥향"
              className="overlapping-image-4"
            />
            <img
              src="https://i.imgur.com/Fx13aQZ.png"
              alt="둥둥향엔피시"
              className="overlapping-image-5"
            />
            <img
              src="https://i.imgur.com/mcpYXug.png"
              alt="개발자엔피시"
              className="overlapping-image-6"
            />
            {/* <p className="image-description-c3">둥둥향</p> */}
            {/* <p className="image-description-c4">개발자</p> */}
            </div>
            
        </div>
        {/* 텍스트 */}
      </div>
      {/* 기타 컴포넌트 내용 */}
      <Footer />
    </div>
  );
}

export default App;
