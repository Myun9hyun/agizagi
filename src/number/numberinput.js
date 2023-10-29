import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './numberinput.css';
import Footer from '../footer/footer';

function NumberInput() {
  const [nickname, setNickname] = useState('');
  const [number, setNumber] = useState('');
  const [passnumber, setPassnumber] = useState('');
  const [remainingChances, setRemainingChances] = useState(0);

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
  };

  const handleNumberChange = (e) => {
    // 입력된 값이 1 이상인지 확인
    const newNumber = e.target.value;
    if (newNumber !== '' && newNumber < 1 || newNumber > 1000) {
      alert('숫자는 1 이상, 1000 이하의 수를 입력해주세요!');
    } else {
      setNumber(newNumber);
    }
  };

  const handlePassnumberChange = (e) => {
    setPassnumber(e.target.value);
  };

  const saveNumber = () => {
    if (!nickname || !number || !passnumber) {
      alert('비어있는 칸이 있습니다. 전부 입력해주세요.');
      return;
    }

    const data = {
      nickname: nickname,
      number: number,
      passnumber: passnumber,
      time: new Date().toISOString(),
    };

    if (remainingChances <= 0) {
      alert('남은 기회가 없습니다.');
      return;
    }

    axios
      .post('http://43.201.175.42:8080/api/numbers/save', data)
      .then((response) => {
        console.log('Number saved:', response.data);
        alert('저장이 완료되었습니다!');
        // 저장 후에도 기회를 업데이트
        fetchRemainingChances(nickname);
      })
      .catch((error) => {
        console.error('Error saving number:', error);
      });
  };

  // useEffect를 사용하여 실시간으로 기회를 조회하도록 변경
  useEffect(() => {
    if (nickname) {
      fetchRemainingChances(nickname);
    }
  }, [nickname]);

  const fetchRemainingChances = (nickname) => {
    axios
      .get('http://43.201.175.42:8080/api/chances/list')
      .then((response) => {
        const chancesData = response.data;
        const userChances = chancesData.find((chance) => chance.nickname === nickname);
        if (userChances) {
          setRemainingChances(userChances.chance);
        } else {
          // 닉네임이 검색되지 않으면 기회를 0으로 설정
          setRemainingChances(0);
        }
      })
      .catch((error) => {
        console.error('Error fetching remaining chances:', error);
      });
  };

  return (
    <div className="login-box">
      <h2>아기자기 비밀금고</h2>
      <form>
        <div className="nickname-box">
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <label>닉네임</label>
        </div>
        <div className="user-box">
          <input
            type="number"
            placeholder="원하는 숫자를 입력하세요 (1~1000)"
            value={number}
            onChange={handleNumberChange}
          />
          <label>금고숫자</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="내 번호 조회때 필요합니다! 잊지말기!"
            value={passnumber}
            onChange={handlePassnumberChange}
          />
          <label>개인번호</label>
        </div>
        <p>남은 기회: {remainingChances}</p>
        <a onClick={saveNumber}>Save Number</a>
      </form>
    </div>
  );
}

export default NumberInput;
