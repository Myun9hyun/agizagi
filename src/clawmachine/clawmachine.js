import React from 'react';
import './clawmachine.css';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import Info from '../Info/info';
import Comment from '../comment/comment'
function App() {
  return (
    <div className="claw-machine-container">
      <div className="image-container">
        <img src="https://i.imgur.com/mC722y9.png" alt="클로 머신" className="image-style" />
        <div className="image-overlay">
          <Link to="../info">
            <img
              src="https://i.imgur.com/Kb34fYn.gif"
              alt="전구"
              className="overlapping-image-1"
            />
          </Link>
          <div className="overlapping-image-2-container">
            <img
              src="https://i.imgur.com/jtqFLeg.png"
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
          </div>
        </div>
        <div className="image-overlay-2">
          <Link to="../comment">
            <img
              src="https://i.imgur.com/Kb34fYn.gif"
              alt="전구"
              className="overlapping-image-3"
            />
          </Link>
          <div className="overlapping-image-2-container">
            <img
              src="https://i.imgur.com/OfGg1cr.png"
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
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
