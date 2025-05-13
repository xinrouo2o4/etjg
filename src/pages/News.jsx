import React, { useState } from 'react';
import './News.css';

const newsList = [
  { date: '2025.02.01', content: '本平台於114年2月2號（星期日），辦理伺服器維護作業，網站暫停服務通知！' },
  { date: '2024-09-23', content: '因台電辦理設備及電路檢查作業，本平台線上服務自113年9月23日（星期一）17:00起至113年9月24日（星期二）8:00將暫停線上服務，若作業提前完成，將立即回復正常服務，造成不便，敬請見諒。' },
  { date: '2024-07-29', content: '本平台自113年7月29日（星期一）19:00 PM 起至113年7月30日（星期二）09:00 AM止，台電辦理設備更換作業，網站暫停服務通知！' },
  { date: '2024-05-15', content: '本平台自113年5月17日（星期五）起至113年5月20日（星期一）止，辦理機房搬遷作業，網站暫停服務通知！' },
  { date: '2024.03.08', content: '本平台自113年3月8日（星期五）19:00 PM 起至113年7月30日（星期二）09:00 AM止，台電辦理設備更換作業，網站暫停服務通知！' },
];

const relatedlist=[
  { date: '2025.02.01', content: '企業減碳與歐盟碳邊境調整機制(CBAM)相關議題解惑' },
  { date: '2024-09-23', content: '公告「碳費徵收對象溫室氣體減量指定目標」' },
  { date: '2024-07-29', content: '環保局啟動觀音灰渣處理場ROT招商案 邁向永續環保領頭羊' }
]

export default function News() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div className="news-wrapper">
      <div className="tabs">
        <button
          className={activeTab === 'platform' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('platform')}
        >
          平台公告
        </button>
        <button
          className={activeTab === 'related' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('related')}
        >
          相關公告
        </button>
      </div>

      <div className="news-card">
        {activeTab === 'platform' ? (
          newsList.map((item, idx) => (
            <div key={idx} className="news-item">
              <div className="news-date">{item.date}</div>
              <div className="news-content">{item.content}</div>
            </div>
          ))
        ) : (relatedlist.map((related,idx)=>(
            <div key={idx} className="news-item">
              <div className="news-date">{related.date}</div>
              <div className="news-content">{related.content}</div>
            </div>
        ))
        )}
      </div>
    </div>
  );
}
