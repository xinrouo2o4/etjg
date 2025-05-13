import React, { useState } from 'react';
import './ServiceInfo.css';

const page1Links = [
  { name: '綠色貿易資訊網歐盟CBAM專區', url: 'https://www.greentrade.org.tw/CBAM/' },
  { name: '臺灣碳權交易所', url: 'https://www.tcx.com.tw/' },
  { name: '環境部氣候變遷署', url: 'https://www.cca.gov.tw/' },
  { name: '國際能源署', url: 'https://www.iea.org/' },
  { name: '溫室氣體自願減量暨抵換資訊平臺', url: 'https://ghgregistry.moenv.gov.tw/' }
];

const page2Links = [
  { name: '排放量計算公式參考文件', url: '#' },
  { name: '碳盤查與抵換差異說明', url: '#' },
  { name: 'ISO 14064 與 ISO 14067 差別', url: '#' },
  { name: 'CDP 碳揭露常見問題', url: '#' },
  { name: '產品碳足跡查詢系統', url: '#' }
];

const faqPages = [
  [
    { question: '目前碳盤查法規規定有哪些？', answer: '1.環境部：全廠（場）化石燃料燃燒之直接溫室氣體年排放量及使用電力之間接溫室氣體年排放量合計達2.5萬公噸二氧化碳當量以上之製造業。\n2.金管會：金管會於2022年3月3日發布「上市櫃公司永續發展路徑圖」，要求上市櫃公司分階段強制揭露溫室氣體盤查資訊及進行查證。' },
    { question: '溫室氣體盤查之固定、移動、能源間接排放之定義', answer: '固定為固定設施，移動為交通工具，能源間接為購買之電力等間接使用。' },
    { question: '溫室氣體盤查一定要找第三方查證嗎？', answer: '視法規規定與登錄目的而定，部分情況下需經查證機構認可。' },
    { question: '碳盤查與碳足跡的差異', answer: '碳盤查以組織為單位，碳足跡以產品或活動為單位。' },
    { question: '什麼是碳盤查？', answer: '為組織量化其溫室氣體排放的過程，以建立管理與減量依據。' },
  ],
  [
    { question: 'FAQ 第二頁 Q1？', answer: '這是第二頁的第一個問題解答。' },
    { question: 'FAQ 第二頁 Q2？', answer: '這是第二頁的第二個問題解答。' },
    { question: 'FAQ 第二頁 Q3？', answer: '這是第二頁的第三個問題解答。' },
    { question: 'FAQ 第二頁 Q4？', answer: '這是第二頁的第四個問題解答。' },
    { question: 'FAQ 第二頁 Q5？', answer: '這是第二頁的第五個問題解答。' },
  ]
];

export default function ServiceInfo() {
  const [activeTab, setActiveTab] = useState('links');
  const [currentPage, setCurrentPage] = useState(1);

  const links = currentPage === 1 ? page1Links : page2Links;
  const faqs = faqPages[currentPage - 1];

  return (
    <div className="service-wrapper">
      <div className="service-tabs">
        <button className={activeTab === 'links' ? 'tab active' : 'tab'} onClick={() => setActiveTab('links')}>相關網站</button>
        <button className={activeTab === 'faq' ? 'tab active' : 'tab'} onClick={() => setActiveTab('faq')}>常見問題</button>
      </div>

      <div className="service-card">
        {activeTab === 'links' && (
          <>
            {links.map((item, index) => (
              <div key={index} className="service-item">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </div>
            ))}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        )}

        {activeTab === 'faq' && (
          <>
            {faqs.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        )}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <div className="faq-icon">Q</div>
        <div className="faq-text">{question}</div>
      </div>
      {open && <div className="faq-answer" style={{ whiteSpace: 'pre-line' }}>{answer}</div>}
      <hr />
    </div>
  );
}

function Pagination({ currentPage, setCurrentPage }) {
  const totalPages = 2;

  return (
    <div className="pagination">
      &lt;&lt;&nbsp;
      <span
        style={{ cursor: currentPage > 1 ? 'pointer' : 'default', color: currentPage > 1 ? '#1890ff' : '#aaa' }}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        &lt;
      </span>
      &nbsp;
      <span style={{ fontWeight: 'bold' }}>{currentPage}</span>
      &nbsp;..........&nbsp;
      <span
        style={{ cursor: currentPage < totalPages ? 'pointer' : 'default', color: currentPage < totalPages ? '#1890ff' : '#aaa' }}
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
      >
        {currentPage < totalPages ? currentPage + 1 : ''}
      </span>
      &nbsp;&gt;&nbsp;&gt;
    </div>
  );
}