import axios from "axios"
import { Card, Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        // Hi
        // whats up
        // I have tested your api it works well, but i cant send request because of object behaviour
        // when I save data username password subdomain it changes its order and that is cauzing an error
        // for fixing this issue I have wasted about 2 hours on it than i have read that javascript automatically sorts object 
        // and there is no way to disable it. for this reason i cant send valid requst to your api. Your api fits for testing like postman thunder client but 
        // in front end that is becoming issue. If you want I will use another API. waiting for your response :)
        // cheers

        // salom
        // Test topshirig`i bo`yicha API ni testlab ko`rdim , hammasi yaxshi ishlab turibdi.
        // lekin front end tomonda javascript obyektni avtomatik shaklda tartiblagani sortlagani uchun to`g`ri request jo`natishi iloji bolmayapti
        // xohlasez boshqa API bilanam qib beruraman. 2 sot atrofida auto sortini ochirish disable qilish uchun vaqtim ketdi. lekin bu javascript obyektini
        // ozini ichki ishi hisoblanarkan stackoverflow va boshqa bloglardan qarab tahlil qildim.
        // boglanish uchun bemalol yozuring :)
        
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