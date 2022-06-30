import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import Login from "./pages/Login";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Result />} />
                    <Route path={"/login"} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
// config = {
//     method: "post",
//     url: "https://toko.ox-sys.com/security/auth_check",
//     headers: {
//         'Content-type': 'application/x-www-form-urlencoded',
//         'accept': 'application/json'
//     },
//     data: {
//         "_username": values.username,
//         "_password": values.password,
//         "_subdomain": values.subdomain
//     }
// }

// const res = axios(config).then((res) => {
//     console.log(res)
//     return res;
// }).catch((err) => {
//     console.log(err)
// })

// //if auth is success 
// if (res.data.status === 201) {
//     localStorage.setItem("config", config)
//     navigate("/")
// } else {
//     // showing error
// }