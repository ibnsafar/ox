import axios from "axios"
import { Card, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    let info = {};
    let data = {};
    let config = {};

    const onFinish = (values) => {
        console.log('Success:', values);
        info = { ...values }
        data = {
            "_username": info.username,
            "_password": info.password,
            "_subdomain": info.subdomain
        }
        config = {
            method: "post",
            url: "https://" + info.subdomain + ".ox-sys.com/security/auth_check",
            headers: {
                // 'Content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            data
        }
        axios(config).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        localStorage.setItem("config", config)
        console.log(JSON.parse(localStorage.getItem('items')))

        navigate("/")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // for giving request to api


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
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Subdomain" name="subdomain"
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