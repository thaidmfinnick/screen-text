import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, Navigate, useNavigate } from "react-router-dom";
import './login_form.css';

const LoginForm = () => {
  // const navigate = useNavigate();
  // const isFinished = false;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // isFinished = true;
  };
  // useEffect(() => {
  //   if (isFinished) navigate("/main_screen");
  // })

  return (
    <>
    <h2>Đăng nhập</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/forgot_password">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Link to="/main_screen">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Link>
        <Link to="/register">Register now!</Link>
      </Form.Item>
    </Form>
    </>
  );
};

export default LoginForm;