import {Route, Routes} from "react-router-dom";
import {Home, Card, PageNotFound} from "../Pages";

export const AllRoutes = () =>{
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/card"} element={<Card/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}