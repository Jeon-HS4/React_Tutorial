import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLogin, setIsLogin] = useState(false);

    const onClickLogin = () => {
        setIsLogin(true);
    };
    const onClickLogout = () => {
        setIsLogin(false);
    }

    return (
        <div>
            <Toolbar
                isLogin = {isLogin}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding : 16}}>처음 만난 리액트!</div>
        </div>
    );
}

export default LandingPage;