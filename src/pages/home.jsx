import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import EarthImg from '../pic/earth.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <div className="text-section">
        <h1>共築碳中和未來</h1>
        <p>從排放到行動，給你一套有依據的決策建議</p>
        <button className="start-button" onClick={() => navigate('/calculator')}>
          開始試算
        </button>
      </div>
      <div className="image-section">
        <img src={EarthImg} alt="地球圖示" />
      </div>
    </div>
  );
}
