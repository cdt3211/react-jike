import { Button, Card, Form, Input } from "antd";
import './index.scss';
import logo from '@/assets/logo.png';

const Login = () => {
  const onFinish = (value) => {
    console.log(value);
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
          validateTrigger="onBlur"
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误'
              }
            ]}
          >
            <Input size="large" placeholder="手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码'
              }
            ]}
          >
            <Input size="large" placeholder="验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;