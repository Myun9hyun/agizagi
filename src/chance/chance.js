import React, { useState } from 'react';
import axios from 'axios';
import './chance.css';

function NumberInput() {
  const [nickname, setNickname] = useState('');
  const [chance, setChance] = useState(0);
  const [number, setNumber] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleChanceChange = (e) => {
    setChance(e.target.value);
  };



  const saveChance = () => {
    const data = {
      nickname: nickname,
      chance: chance,
      number: number,
    };

    axios
      .post('http://43.201.175.42:8080/api/chances/save', data)
      .then((response) => {
        console.log('Chance saved:', response.data);
        alert('기회가 저장되었습니다!');
        setNickname('');
        setChance(0);
        setNumber('');
      })
      .catch((error) => {
        console.error('Error saving chance:', error);
      });
  };

  return (
    <div className="login-box">
      <h2>금고 기회 부여</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            placeholder="닉네임 입력하기"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <label>닉네임</label>
        </div>
        <div className="user-box">
          <input
            type="number"
            placeholder="Remaining Chances"
            value={chance}
            onChange={handleChanceChange}
          />
          <label>기회 부여</label>
        </div>
        
        <a onClick={saveChance}>Save Chance</a>
      </form>
    </div>
  );
}

export default NumberInput;
