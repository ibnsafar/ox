import axios from "axios"
import { Card, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    let config = {};

    // WHAT IS UP

    // YOUR REST API AUTH IS GIVING 401 because credentials that you gave is incorrect
    // your data was user_task user_task toko It did not work out . Your api might be correct but,
    // make sure you are giving right login and password that works successfully. Check that by yourself
    
    // cheers :)

    const onFinish = (values) => {
        console.log('Success:', values);

        config = {
            method: "post",
            url: "https://" + values.subdomain + ".ox-sys.com/security/auth_check",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            data: {
                "_username": values.username,
                "_password": values.password,
                "_subdomain": values.subdomain
            }
        }

        const res = axios(config).then((res) => {
            console.log(res)
            return res;
        }).catch((err) => {
            console.log(err)
        })

        //if auth is success 
        if (res.data.status === 201) {
            localStorage.setItem("config", config)
            navigate("/")
        } else {
            // showing error
        }

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