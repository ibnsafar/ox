import axios from "axios"
import { Card, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        
        let options = {
            url: `https://${values.subdomain}.ox-sys.com/security/auth_check`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            data: {
                _username: values.username,
                _password: values.password,
                _subdomain: values.subdomain,
            }
        }

        console.log(options)
        const result = axios(options).then((res) => {
            console.log(res)
            return res;
        })
    };

    // body: `_username=${values.username}&_password=${values.password}&_subdomain=${values.subdomain}`

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card
            style={{
                width: 600,
                margin: "auto",
                textAlign: "center",
                marginTop: "10%"
            }}
            title="Login">
            <Form name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item label="Username" name="username"
                    initialValue={"user_task"}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!'
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password"
                    initialValue={"user_task"}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Subdomain" name="subdomain"
                    initialValue={"toko"}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your subdomain!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default Login;