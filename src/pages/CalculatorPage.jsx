import { Layout, Menu, Steps, Form, Select, Input, Button, Table, Radio } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './CalculatorPage.css';
import emissionFactorTable from '../data/emissionFactors';

const { Content, Sider } = Layout;

const steps = [
  { title: '輸入排放來源' },
  { title: '確認排放係數類型' },
  { title: '試算結果與統計分析' },
];

const rawMaterialData = {
  "燃油": [
    { label: '50001 - 原油', value: '50001' },
    { label: '50004 - 液化天然氣', value: '50004' },
    { label: '170001 - 車用汽油', value: '170001' },
    { label: '170002 - 航空汽油', value: '170002' },
    { label: '170004 - 航空燃油', value: '170004' },
    { label: '170005 - 煤油', value: '170005' },
    { label: '170006 - 柴油', value: '170006' },
    { label: '170008 - 燃料油', value: '170008' },
    { label: '170010 - 潤滑油', value: '170010' },
    { label: '170011 - 石油腦(輕油)', value: '170011' },
    { label: '170017 - 柏油(瀝青)', value: '170017' },
    { label: '170019 - ４～６號重油', value: '170019' },
    { label: '170029 - 石油焦', value: '170029' },
    { label: '170036 - 石油腦(重油)', value: '170036' },
    { label: '350008 - 液化石油氣', value: '350008' },
    { label: 'GG1702 - 燃料－奧里油', value: 'GG1702' },
    { label: 'GG1799 - 其他油品', value: 'GG1799' }
  ],
  "燃氣": [
    { label: '50002 - 天然氣', value: '50002' },
    { label: '180178 - 乙烷', value: '180178' },
    { label: '350014 - 煉焦爐氣', value: '350014' },
    { label: '350016 - 精煉油氣', value: '350016' },
    { label: '350017 - 高爐氣', value: '350017' }
  ],
  "燃煤": [
    { label: '70001 - 泥煤', value: '70001' },
    { label: '70002 - 褐煤', value: '70002' },
    { label: '70003 - 煙煤', value: '70003' },
    { label: '70004 - 半煙煤', value: '70004' },
    { label: '70005 - 無煙煤', value: '70005' },
    { label: '170028 - 焦炭', value: '170028' },
    { label: 'GG0700 - 燃料－煤球', value: 'GG0700' },
    { label: 'GG0701 - 燃料－油頁岩', value: 'GG0701' },
    { label: 'GG0702 - 燃料－焦煤', value: 'GG0702' },
    { label: 'GG0703 - 燃料－原料煤', value: 'GG0703' },
    { label: 'GG0704 - 燃料－自產煤', value: 'GG0704' }
  ],
  "電力": [
    { label: '350099 - 其他電力', value: '350099' },
    { label: 'GG3502 - REC登載電力使用-電證合一', value: 'GG3502' },
    { label: 'GG3505 - 再生能源(自發自用)', value: 'GG3505' }
  ],
  "製程": [
    { label: '60013 - 白雲石', value: '60013' },
    { label: '180139 - 碳酸鈉(純鹼)', value: '180139' },
    { label: '180140 - 碳酸鉀', value: '180140' },
    { label: '180143 - 碳酸鋇', value: '180143' },
    { label: '180144 - 碳酸鎂', value: '180144' },
    { label: '180146 - 碳酸氫鈉(小蘇打)', value: '180146' },
    { label: '180191 - 乙炔', value: '180191' },
    { label: '180365 - 尿素(肥料用)', value: '180365' },
    { label: '230238 - 石灰石(CaCO3）', value: '230238' },
    { label: '240024 - 低碳棒盤元', value: '240024' }
  ],
  "逸散/含氟氣體": [
    { label: '180014 - 氫氟碳化物', value: '180014' },
    { label: '180122 - 六氟化硫', value: '180122' },
    { label: '180123 - 三氟化氮', value: '180123' },
    { label: '180176 - 石化甲烷', value: '180176' },
    { label: '180177 - 甲烷', value: '180177' },
    { label: 'GG1802 - 氣體－氧化亞氮', value: 'GG1802' },
    { label: 'GG1803 - PFC-14， 四氟化碳，CF4', value: 'GG1803' },
    { label: 'GG1804 - PFC-116，六氟乙烷，C2F6', value: 'GG1804' },
    { label: 'GG1808 - C4F8，八氟環丁烷', value: 'GG1808' },
    { label: 'GG1809 - C3F8，全氟丙烷', value: 'GG1809' },
    { label: 'GG1829 - HFC-227ea，七氟丙烷，CF3CHFCF3', value: 'GG1829' },
    { label: 'GG1835 - HFC-134a/R-134a，1,1,1,2-四氟乙烷，CH2FCF3', value: 'GG1835' },
    { label: 'GG1838 - HFC-41一氟甲烷，CH3F', value: 'GG1838' },
    { label: 'GG1839 - HFC-32/R-32二氟甲烷，CH2F2', value: 'GG1839' },
    { label: 'GG1840 - HFC-23/R-23三氟甲烷，CHF3', value: 'GG1840' },
    { label: 'GG1878 - R-507A，HFC-125/HFC-143a (50.0/50.0)', value: 'GG1878' }
  ],
};

const materialOptions = Object.fromEntries(
  Object.entries(rawMaterialData).map(([category, items]) => [
    category,
    items.map(item => {
      const nameOnly = item.label.split(' - ')[1]; 
      return { label: nameOnly, value: item.value };
    })
  ])
);

// 排放來源 ➔ 對應範疇別
const scopeMap = {
  燃油: '直接',
  燃氣: '直接',
  燃煤: '直接',
  電力: '間接',
  製程: '直接',
  '逸散/含氟氣體': '直接' 
};

const typeMap = {
  "燃油": "燃料燃燒",
  "燃氣": "燃料燃燒",
  "燃煤": "燃料燃燒",
  "電力": "電力",
  "製程": "製程",
  "逸散/含氟氣體": "逸散"
};

const App = () => {
  const [collapsed, setCollapsed] = useState(true); // 預設收合
  const [current, setCurrent] = useState(0);
  const [source, setSource] = useState(null); // ⭐ 抓取「排放來源」目前選什麼
  const [scope, setScope] = useState('');        // ⭐範疇別
  const [form] = Form.useForm();
  const [results, setResults] = useState(null);
  const [rows, setRows] = useState([]); // 改為支援多列資料
  const [serialCounter, setSerialCounter] = useState(1);


  const pieData = [
    { name: '固定', value: rows.reduce((sum, row) => row.type === '燃料燃燒' ? sum + parseFloat(row.emissionCO2e) : sum, 0) },
    { name: '製程', value: rows.reduce((sum, row) => row.type === '製程' ? sum + parseFloat(row.emissionCO2e) : sum, 0) },
    { name: '移動', value: 0 }, // 你可以擴充類別邏輯
    { name: '逸散', value: rows.reduce((sum, row) => row.type === '逸散' ? sum + parseFloat(row.emissionCO2e) : sum, 0) },
    { name: '電力', value: rows.reduce((sum, row) => row.type === '電力' ? sum + parseFloat(row.emissionCO2e) : sum, 0) },
  ];

  const COLORS = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4'];

  const handleDelete = (key) => {
    const newRows = rows.filter(row => row.key !== key);
    setRows(newRows);
    
    // 若當前刪除的是剛新增那筆的細節，清空顯示
    if (results && results.rowData.key === key) {
      setResults(null);
    }
    // 若全清空，跳回第一步
    if (newRows.length === 0) {
    setCurrent(0);  
  }
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value, percent } = payload[0];
      return (
        <div style={{ background: '#1e293b', color: '#fff', padding: 10, borderRadius: 6, fontSize: 14 }}>
          <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{name}</div>
          <div>總排放當量彙整 { (percent * 100).toFixed(2) }%</div>
        </div>
      );
    }
    return null;
  };

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const handleFormSubmit = (values) => {
    const { source, materialCode, activityData, isBiomass } = values;
    
    const factors = emissionFactorTable[materialCode];  // 排放係數值計算
    const numericActivityData = parseFloat(activityData);
    const details = Object.entries(factors).map(([ghg, { factor, gwp }]) => {
      const emission = +(numericActivityData * factor).toFixed(10); // 用高精度計算
      const emissionCO2e = +(emission * gwp).toFixed(10);

      return {
        ghg,
        factorType: '預設',
        factor: +factor.toFixed(10),
        unit: '公噸/公秉',
        source: '溫室氣體排放係數管理表 6.0.4',
        emission: +emission.toFixed(4),        // 顯示為 4 位數
        gwp,
        emissionCO2e: +emissionCO2e.toFixed(4)
      };
    });
  
    const totalCO2e = details.reduce((sum, d) => sum + d.emissionCO2e, 0);
    const biomassEmission = isBiomass === '是' ? totalCO2e : 0;

    const newKey = Date.now().toString();

    // 進度條3
    const newRow = {
      key: serialCounter.toString(), // 用作 table 的 key
      serial: serialCounter,         // 顯示用序號  
      scope: scopeMap[source],
      type: typeMap[source] || '其他',
      code: materialCode,
      name: rawMaterialData[source].find(option => option.value === materialCode)?.label.split(' - ')[1] || materialCode,
      activityData,
      unit: '公噸/年',
      co2: '✔',
      ch4: '✔',
      n2o: '✔',
      hfcs: '-',
      pfcs: '-',
      sf6: '-',
      nf3: '-',
      isBiomass,
      emissionCO2e: totalCO2e.toFixed(4),
      biomassEmission: biomassEmission.toFixed(4)
    };
    setSerialCounter(prev => prev + 1);

    setRows(prev => [...prev, newRow]);
    setResults({ rowData: newRow, details });
    setCurrent(1);
  };
  
  const total = rows.reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0);

  const typePercentages = {};
  rows.forEach(row => {
    const type = row.type;
    const value = parseFloat(row.emissionCO2e);
    if (!typePercentages[type]) typePercentages[type] = 0;
    typePercentages[type] += value;
  });

  // 轉為百分比、保留兩位小數
  Object.keys(typePercentages).forEach(type => {
    typePercentages[type] = total === 0
      ? '0.00'
      : ((typePercentages[type] / total) * 100).toFixed(2);
  });

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#e6f7ff', padding: '24px' }}>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 1000,
          backgroundColor: '#fff',
          width: 32,
          height: 48,
          borderRadius: '0 8px 8px 0',
          boxShadow: '0 0 6px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: 20,
          lineHeight: 1
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? '>' : '<'}
      </div>
      <Layout style={{ background: 'transparent' }}>
        <Sider
          width={300}
          collapsedWidth={0}
          collapsed={collapsed}
          trigger={null}
          style={{ background: 'transparent', overflow: 'hidden' }}
        >
          {/* 僅在展開時渲染表單內容 */}
          {!collapsed && (
            <div
              style={{
                padding: '16px 8px',
              }}
            >
          {/* 表單 */}
          <div className="card-block">
            <div className="calculator-title">溫室氣體試算</div>

            <div className="calculator-card">
            <Form
              layout="vertical"
              form={form}
              onFinish={handleFormSubmit}
              initialValues={{ isBiomass: '否' }} // ⭐ 預設值為否
              style={{ marginTop: 40, background: 'white' }}
            >
              <Form.Item
                label="溫室氣體排放來源"
                name="source"
                rules={[{ required: true, message: '請選擇排放來源' }]}
              >
                <Select
                  placeholder="請選擇"
                  options={Object.keys(rawMaterialData).map(key => ({
                    label: key,
                    value: key,
                  }))}
                  onChange={(value) => {
                    setSource(value);
                    setScope(scopeMap[value]);
                    form.setFieldsValue({
                      materialCode: undefined,
                      scope: scopeMap[value],
                    });
                  }}
                />
              </Form.Item>

              <Form.Item
                label="原燃物料代碼"
                name="materialCode"
                rules={[{ required: true, message: '請選擇原燃物料代碼' }]}
              >
                <Select
                  placeholder="請先選擇排放來源"
                  disabled={!source}
                  options={
                    source
                      ? [{ label: '請選擇', value: '', disabled: true }, ...rawMaterialData[source]]
                      : []
                  }
                />
              </Form.Item>

              <Form.Item
                label="範疇別"
                name="scope"
                rules={[{ required: true, message: '請選擇範疇別' }]}
              >
                <Input readOnly style={{ backgroundColor: 'white', color: 'black' }} />
              </Form.Item>

              <Form.Item
                label="活動數據"
                name="activityData"
                rules={[{ required: true, message: '請輸入活動數據' }]}
              >
                <Input type="number" placeholder="請輸入數值" step="0.0001" min="0" />
              </Form.Item>

              <div style={{
                textAlign: 'center',
                fontSize: '12px',
                color: '#888',
                marginTop: '-16px',
                marginBottom: '12px',
              }}>
                單位：公噸/年；小數4位數為限
              </div>

              <Form.Item
                label="是否為移動燃燒源"
                name="isBiomass"
                rules={[{ required: true, message: '請選擇是否為生質能' }]}
              >
                <Radio.Group>
                  <Radio value="否">否</Radio>
                  <Radio value="是">是</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="是否屬於生質能"
                name="isBiomass"
                rules={[{ required: true, message: '請選擇是否為生質能' }]}
              >
                <Radio.Group>
                  <Radio value="否">否</Radio>
                  <Radio value="是">是</Radio>
                </Radio.Group>
              </Form.Item>

              <Button type="primary" htmlType="submit">確認送出</Button>
            </Form>
            </div>
            </div>
          </div>
          )}
        </Sider>

        {/* 右邊主內容區 */}
        <Content style={{ padding: 24, backgroundColor: '#E0F0FA', minHeight: 'calc(100vh - 64px)' }}>
          <Steps current={Math.min(current, 2)} items={steps} style={{ marginBottom: 24 }} />

          <h2 style={{ fontWeight: 'bold', fontSize: 24 }}>{current === 3 ? '結果分析' : '試算結果'}</h2>

          {current === 1 && results && results.rowData && (
            <div style={{ background: 'white', padding: 24, borderRadius: 8 }}>
              <Table
                className="custom-header-table"
                pagination={false}
                dataSource={[results.rowData]}
                columns={[
                  { title: '範疇別', dataIndex: 'scope', align: 'center' },
                  { title: '排放型式', dataIndex: 'type', align: 'center' },
                  { title: '原物料代碼', dataIndex: 'code', align: 'center' },
                  { title: '原燃物料名稱', dataIndex: 'name', align: 'center' },
                  { title: '活動數據', dataIndex: 'activityData', align: 'center' },
                  { title: '活動數據單位', dataIndex: 'unit', align: 'center' }
                ]}                
              />

              <hr style={{ margin: '32px 0', borderTop: '2px solid #bbb' }} />
              
              <Table
                pagination={false}
                dataSource={results.details}
                scroll={{ x: 'max-content' }}
                columns={[
                  { title: '溫室氣體', dataIndex: 'ghg' },
                  {
                    title: '排放係數類型',
                    dataIndex: 'factorType',
                    render: (value, record, index) => (
                      <Select
                        defaultValue={value}
                        style={{ width: 100 }}
                        onChange={(newValue) => {
                          const newDetails = [...results.details];
                          newDetails[index].factorType = newValue;
                          setResults({ ...results, details: newDetails });
                        }}
                        options={[
                          { label: '預設', value: '預設' },
                          { label: '自訂', value: '自訂' }
                        ]}
                      />
                    )
                  },
                  { title: '排放係數值', dataIndex: 'factor' },
                  { title: '單位', dataIndex: 'unit' },
                  { title: '來源', dataIndex: 'source' },
                  { title: '排放量 (公噸/年)', dataIndex: 'emission' },
                  { title: 'GWP', dataIndex: 'gwp' },
                  { title: '排放當量 (公噸CO₂e/年)', dataIndex: 'emissionCO2e' },
                ]}
              />

              <div style={{ textAlign: 'right', marginTop: 24 }}>
                <Button type="primary" onClick={next}>下一步</Button>
              </div>
            </div>
          )}

          {/* 試算結果與統計分析 */}
          {current === 2 && results && (
            <div style={{ background: 'white', padding: 24, borderRadius: 8 }}>
              <h3>總排放來源</h3>
              <Table
                className="custom-header-table"
                pagination={false}
                scroll={{ x: 'max-content' }}
                dataSource={rows}
                columns={[
                  { title: '序號', dataIndex: 'serial' },
                  { title: '範疇別', dataIndex: 'scope' },
                  { title: '排放型式', dataIndex: 'type' },
                  { title: '原物料代碼', dataIndex: 'code' },
                  { title: '原燃物料名稱', dataIndex: 'name' },
                  { title: '產生CO₂', dataIndex: 'co2' },
                  { title: '產生CH₄', dataIndex: 'ch4' },
                  { title: '產生N₂O', dataIndex: 'n2o' },
                  { title: '產生HFCs', dataIndex: 'hfcs' },
                  { title: '產生PFCs', dataIndex: 'pfcs' },
                  { title: '產生SF₆', dataIndex: 'sf6' },
                  { title: '產生NF₃', dataIndex: 'nf3' },
                  { title: '活動數據（小數4位）', dataIndex: 'activityData' },
                  { title: '活動數據單位', dataIndex: 'unit' },
                  { title: '屬生質能源', dataIndex: 'isBiomass' },
                  { title: '排放當量（公噸CO₂e/年）不含生質（小數4位）', dataIndex: 'emissionCO2e' },
                  { title: '生質排放當量（公噸CO₂e/年）', dataIndex: 'biomassEmission' },
                  {
                    title: '操作',
                    dataIndex: 'operation',
                    align: 'center',
                    render: (_, record) => (
                      <Button danger onClick={() => handleDelete(record.key)}>
                        刪除
                      </Button>
                    )
                  }
                ]}
              />
              
              <div style={{ flex: 1, padding: 16, borderRadius: 8, textAlign: 'center' }} />
              <h3 style={{ marginTop: 32 }}>排放量統計分析</h3>
              {/* 第一個 div */}
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{
                  flex: 1,
                  height: 320,
                  border: '1px solid #ccc',
                  padding: 16,
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h4>總排放當量彙整(公噸CO₂e/年)</h4>

                  <div style={{ position: 'relative' }}>
                    <PieChart width={240} height={200}>
                      <Pie
                        data={pieData}
                        cx="45%" // 圓心 X 座標左移，留空間給右邊圖例
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{
                          marginLeft: 12, // 控制圖例與圓圖之間的距離
                          paddingRight: 0  // 不要貼太邊
                        }}
                      />
                    </PieChart>
                    <p style={{ fontSize: 20, textAlign: 'center', margin: 0 }}>
                      {rows.reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0).toFixed(4)} 公噸CO₂e
                    </p>
                  </div>
                </div>
                {/* 第二個 div */}
                <div style={{ flex: 1, border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
                  <h4>直接排放當量(公噸CO₂e/年)</h4>
                  <table style={{ width: '100%', marginTop: 12, lineHeight: '2' }}>
                    <tbody>
                      <tr>
                        <td>固定燃料燃燒</td>
                        <td style={{ textAlign: 'right' }}>
                          {rows
                            .filter(row => row.type === '燃料燃燒')
                            .reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                      <tr>
                        <td>製程</td>
                        <td style={{ textAlign: 'right' }}>
                          {rows
                            .filter(row => row.type === '製程')
                            .reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                      <tr>
                        <td>移動</td>
                        <td style={{ textAlign: 'right' }}>
                          {rows
                            .filter(row => row.type === '移動')
                            .reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                      <tr>
                        <td>逸散</td>
                        <td style={{ textAlign: 'right' }}>
                          {rows
                            .filter(row => row.type === '逸散')
                            .reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                      <tr style={{ fontWeight: 'bold', borderTop: '1px solid #999', marginTop: 8 }}>
                        <td>小計</td>
                        <td style={{ textAlign: 'right' }}>
                          {rows
                            .filter(row => ['燃料燃燒', '製程', '移動', '逸散'].includes(row.type))
                            .reduce((sum, row) => sum + parseFloat(row.emissionCO2e), 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                <div style={{ flex: 1, border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
                  <h4>能源間接排放當量(公噸CO2e/年)</h4>
                  <p>外購電力：0</p>
                </div>
              </div>
              <div style={{ textAlign: 'right', marginTop: 24 }}>
                <Button type="primary" onClick={() => setCurrent(3)}>下一步</Button>
              </div>
            </div>
          )}
          {current === 3 && (
            <Content style={{ padding: 5 }}>
              <div style={{ background: 'white', borderRadius: 12, padding: 24, marginTop: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <Button>匯入CSV</Button>
                  <Button type="primary">結果與分析</Button>
                </div>
                <div style={{ fontSize: 16, lineHeight: 2 }}>
                  <p>根據您提供的數據，原油燃料燃燒所佔比例為最高，這可能代表您在使用高碳排放的能源來源。</p>
                  <p>建議如下：</p>

                  <ol>
                    <li>
                      <strong>能源替代：</strong>
                      <ul>
                        <li>優先評估以低碳能源（如天然氣、再生能源）部分取代原油使用。</li>
                        <li>若可行，導入綠電採購（如再生能源憑證、RE100 措施）。</li>
                      </ul>
                    </li>
                    <li>
                      <strong>提升能源效率：</strong>
                      <ul>
                        <li>檢視原油使用設備之效率，導入高效率鍋爐或熱能回收系統。</li>
                        <li>建立能源管理系統（EnMS），進行耗能診斷與改善。</li>
                      </ul>
                    </li>
                    <li>
                      <strong>減碳技術導入：</strong>
                      <ul>
                        <li>評估導入碳捕捉與封存（CCS）或碳中和燃料。</li>
                        <li>探索碳抵換機制，如參與碳交易市場或購買碳權。</li>
                      </ul>
                    </li>
                    <li>
                      <strong>營運與流程優化：</strong>
                      <ul>
                        <li>減少空轉設備與運轉時數。</li>
                        <li>優化原料運輸路線與批次排程。</li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div style={{ textAlign: 'right', marginTop: 24 }}>
                  <Button>報告下載</Button>
                </div>
              </div>
            </Content>
          )}
        </Content>
      </Layout>
      <style>
      {`
        .custom-header-table .ant-table-thead > tr > th {
          background-color: #dbeafe !important;
          font-weight: bold !important;
          text-align: center;
        }
      `}
      </style>
    </Layout>
  );
};

export default App;
