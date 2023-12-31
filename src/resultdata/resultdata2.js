import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './resultdata.css';

function ResultData() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://43.201.175.42:8080/api/numbers/list?page=${pageNumber}`);
        setData(response.data);
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태를 false로 변경
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageNumber]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const displayData = data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

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

    return `${month}/${day} ${hours}:${minutes}:${seconds}`;
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
          {loading ? ( // 로딩 중일 때 문구를 표시
            <div className="loading-text">데이터를 불러오고 있습니다...</div>
          ) : (
            <div className="info-paragraph">
                {/* <p>이름 번호 날짜 시간</p> */}
              {displayData.map((item, index) => (
                <p key={index}>{item.nickname} : {item.number}  ({formatDateAndTime(item.time)})</p>
              ))}
            </div>
          )}
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
            src="https://i.imgur.com/hPjWbAr.png"
            alt="영래"
            className="additional-image-youngrae"
          />
           <img
            src="https://i.imgur.com/cI4jH9G.png"
            alt="영래스크립트"
            className="additional-image-youngname"
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
