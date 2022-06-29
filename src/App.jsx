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