import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './resultdata.css';

function ResultData() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [randomNicknames, setRandomNicknames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://43.201.175.42:8080/api/numbers/list?page=${pageNumber}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageNumber]);

  // 중복된 nickname을 처리하고 두 개의 랜덤한 nickname을 선택하는 함수
  const processData = (data) => {
    const nicknameMap = new Map();

    // 데이터를 nickname을 기준으로 그룹화
    data.forEach((item) => {
      const nickname = item.nickname;
      if (!nicknameMap.has(nickname)) {
        nicknameMap.set(nickname, []);
      }
      nicknameMap.get(nickname).push(item);
    });

    // 두 개의 랜덤한 데이터를 선택하여 randomNicknames 상태에 설정
    const randomNicknames = [];
    nicknameMap.forEach((items) => {
      if (items.length >= 2) {
        const randomIndices = [];
        while (randomIndices.length < 2) {
          const randomIndex = Math.floor(Math.random() * items.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        randomIndices.forEach((index) => randomNicknames.push(items[index]));
      } else {
        randomNicknames.push(items[0]);
      }
    });

    setRandomNicknames(randomNicknames);
  };

  useEffect(() => {
    processData(data);
  }, [data]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(randomNicknames.length / itemsPerPage);

  const displayData = randomNicknames.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

  // 날짜 및 시간 형식을 변경하는 함수 (한국 시간으로 보정)
  const formatDateAndTime = (dateTime) => {
    const dateObj = new Date(dateTime);

    // 한국 시간으로 보정
    dateObj.setHours(dateObj.getHours() + 9);

    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // 월을 두 자리 숫자로 표시
    const day = dateObj.getDate().toString().padStart(2, '0'); // 일을 두 자리 숫자로 표시
    const hours = dateObj.getHours().toString().padStart(2, '0'); // 시를 두 자리 숫자로 표시
    const minutes = dateObj.getMinutes().toString().padStart(2, '0'); // 분을 두 자리 숫자로 표시
    const seconds = dateObj.getSeconds().toString().padStart(2, '0'); // 초를 두 자리 숫자로 표시

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="info-container">
      <div className="info-content">
        <img
          src="https://i.imgur.com/QNIaPn1.png"
          alt="퀘스트창"
          className="info-image"
        />
        <div className="info-text-container">
          <div className="info-paragraph">
            {displayData.map((item, index) => (
              <p key={index}>{item.nickname} {item.number} {formatDateAndTime(item.time)}</p>
            ))}
          </div>
          <div className="pagination-buttons">
            {pageNumber > 1 && (
              <img
                src="https://i.imgur.com/o3zxrEN.png"
                alt="이전"
                className="pagination-image-1"
                onClick={() => setPageNumber(pageNumber - 1)}
              />
            )}
            {pageNumber < totalPages && (
              <img
                src="https://i.imgur.com/8RJpXyn.png"
                alt="다음"
                className="pagination-image-2"
                onClick={() => setPageNumber(pageNumber + 1)}
              />
            )}
          </div>
        </div>

        <div className="additional-image-container">
          <img
            src="https://i.imgur.com/d9yIk2r.png"
            alt="영래"
            className="additional-image"
          />
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
