import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';


const LoginForm = ({onChangeState}) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = () => {
    
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
      style={{textAlign:"center"}}
      onFinish={onChangeState}
    >
      <Form.Item label="Số điện thoại" required tooltip="Đây là trường bắt buộc">
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        // tooltip={{ title: '', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="Nhập mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Đăng nhập</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;