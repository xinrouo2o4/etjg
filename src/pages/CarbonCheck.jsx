import React, { useState } from 'react';
import './CarbonCheck.css';
import flowImage from '../pic/ghg-flowchart.png'; // 請確認你圖片命名與路徑

const steps = [
  { title: '邊界設定', desc: '釐清碳盤查的範圍' },
  { title: '排放源鑑別', desc: '找出盤查範圍內的所有排放源，並區分為範疇一、二、三' },
  { title: '排放量計算', desc: '把每種氣體的排放量統一換算成等同排放的二氧化碳量' },
  { title: '數據品質管理', desc: '建立一個內部管理系統，並分析可能存在的不確定風險' },
  { title: '文件化與紀錄', desc: '紀錄盤查過程，作為內部紀錄與外部查證或查核需求' },
];

export default function CarbonCheck() {
  const [activeTab, setActiveTab] = useState('how');

  return (
    <div className="carbon-check-wrapper">
      <div className="carbon-check-tabs">
        <button className={activeTab === 'how' ? 'tab active' : 'tab'} onClick={() => setActiveTab('how')}>如何執行</button>
        <button className={activeTab === 'guide' ? 'tab active' : 'tab'} onClick={() => setActiveTab('guide')}>盤查作業指引</button>
      </div>

      {/* 如何執行 */}
      {activeTab === 'how' && (
        <div className="step-flow">
          {steps.map((step, index) => (
            <div key={index} className="step-block">
              <div className="step-left">
                <div className="step-badge">Step {index + 1}</div>
                {index < steps.length - 1 && <div className="step-arrow">↓</div>}
              </div>
              <div className="step-right">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 盤查作業指引 */}
      {activeTab === 'guide' && (
        <div className="guide-section">
          <div className="guide-text">
            <p>
              排放量試算工具主要提供排放源自我檢視是否達法規所規範之排放規模門檻，
              針對法規規範之排放規模門檻之外的排放源，亦建立相關試算表單工具，
              以供排放源自行檢視全廠之溫室氣體排放現況。
              主管機關藉由此排放量試算工具也可掌握各轉內之應盤查登錄對象，
              以落實排放量盤查登錄制度。
            </p>
          </div>
          <div className="guide-image">
            <img src={flowImage} alt="盤查作業流程圖" />
          </div>
        </div>
      )}
    </div>
  );
}
