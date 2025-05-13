import React from 'react';
import { Form, Input, Button } from 'antd';

export default function Register() {
  const onFinish = (values) => {
    console.log('註冊資料:', values);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>註冊</h2>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: '請輸入帳號' }]}>
          <Input placeholder="帳號" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, type: 'email', message: '請輸入有效的 Email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '請輸入密碼' }]}>
          <Input.Password placeholder="密碼" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            註冊
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
