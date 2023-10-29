import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ClawMachine from '../clawmachine/clawmachine';
import NumberGet from '../number/numberget';
import NumberInput from '../number/numberinput';
import Chance from '../chance/chance';
import './navbar.css';
import PassInput from '../passinput/passinput';
import MyNumber from '../mynumber/mynumber'
import Info from '../Info/info';
import Info2 from '../Info/info2';
import Info3 from '../Info/info3';
import Info4 from '../Info/info4';
import Info5 from '../Info/info5';
import Info6 from '../Info/info6';
import Info7 from '../Info/info7';
import Info8 from '../Info/info8';
import Result from '../result/result';
import Result2 from '../result/result2';
import Result3 from '../result/result3';
import Result4 from '../result/result4';
import ResultData  from '../resultdata/resultdata';
import ResultData2  from '../resultdata/resultdata2';
import Comment from '../comment/comment'
import Comment2 from '../comment/comment2'
import Comment3 from '../comment/comment3'
import Comment4 from '../comment/comment4'

function Navbar() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordCheck = (enteredPassword) => {
    if (enteredPassword === '970808') {
      setIsPasswordCorrect(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/input">입력</Link>
            </li>
            <li>
              <Link to="/get">금고결과</Link>
            </li>
            <li>
              <Link to="/chance">기회부여</Link>
            </li>
            <li>
              <Link to="/mynumber">내번호조회</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/input" element={<NumberInput />} />
          <Route path="/get" element={<NumberGet />} />
          <Route path="/" element={<ClawMachine />} />
          <Route path="/mynumber" element={<MyNumber />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info2" element={<Info2 />} />
          <Route path="/info3" element={<Info3 />} />
          <Route path="/info4" element={<Info4 />} />
          <Route path="/info5" element={<Info5 />} />
          <Route path="/info6" element={<Info6 />} />
          <Route path="/info7" element={<Info7 />} />
          <Route path="/info8" element={<Info8 />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result2" element={<Result2 />} />
          <Route path="/result3" element={<Result3 />} />
          <Route path="/result4" element={<Result4 />} />
          <Route path="/resultdata" element={<ResultData />} />
          <Route path="/resultdata2" element={<ResultData2 />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/comment2" element={<Comment2 />} />
          <Route path="/comment3" element={<Comment3 />} />
          <Route path="/comment4" element={<Comment4 />} />



          {isPasswordCorrect ? (
            <Route path="/chance" element={<Chance />} />
          ) : (
            <Route
              path="/chance"
              element={
                <PassInput onPasswordCheck={handlePasswordCheck} />
              } // PassInput 컴포넌트를 렌더링하고 onPasswordCheck 함수를 전달
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
