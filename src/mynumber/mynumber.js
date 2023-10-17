import React, { useState } from 'react';
import axios from 'axios';
import './mynumber.css'; // CSS 파일을 import

function MyNumber() {
  const [nickname, setNickname] = useState('');
  const [passnumber, setPassnumber] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePassnumberChange = (e) => {
    setPassnumber(e.target.value);
  };

  const searchNumber = () => {
    axios
      .get(`http://43.201.175.42:8080/api/numbers/list`)
      .then((response) => {
        const data = response.data;
        const filteredData = data.filter(
          (item) => item.nickname === nickname && item.passnumber.toString() === passnumber
        );
        setSearchResult(filteredData);
        setShowAlert(filteredData.length === 0);
        console.log('검색 결과:', filteredData);
      })
      .catch((error) => {
        console.error('Error searching number:', error);
      });
  };

  return (
    <div className="login-box">
      <h2>내 번호 조회</h2>
      <form>

      <div className="user-box">
        <input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          className="input-field"
          placeholder="닉네임을 입력하세요" // placeholder 추가
        />
        <label>닉네임</label>

      </div>
      <div className="user-box">
        <input
          type="password"
          value={passnumber}
          onChange={handlePassnumberChange}
          className="input-field"
          placeholder="개인번호를 입력하세요" // placeholder 추가
        />
        <label>개인번호</label>

      </div>
      <a onClick={searchNumber}>See My Number</a>
      </form>

      {showAlert && (
        <div>
          <p>닉네임 혹은 개인번호를 다시 입력해주세요!</p>
        </div>
      )}

      {searchResult.length > 0 ? (
        <div>
          <h3>검색 결과:</h3>
          {searchResult.map((result) => (
            <div key={result.id}>
              <p>닉네임: {result.nickname}, 내번호: {result.number}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}

export default MyNumber;
