import React, {useEffect, useState} from "react";

const LoginLogo = () => {
  const login = [
    "登录",
    "авторизоваться",
    "تسجيل الدخول",
    "로그인",
    "logga in",
    "Σύνδεση",
    "accesso",
    "เข้าสู่ระบบ",
    "entrer",
    "koma inn",
  ];

  const [currentLoginMessage, setLoginMessage] = useState("log in")
  let loginMessageIndex = 0;
  const nextLoginMessage = () => {if(loginMessageIndex !== login.length){setLoginMessage(login[loginMessageIndex++])} else {loginMessageIndex = 0}}

  useEffect(
      () => {
          const id = setInterval(nextLoginMessage, 1000);
          return () => id;
      },
      []
  );

  return <span id="loginCar">{currentLoginMessage}</span>;
};

export default LoginLogo;


  // var i = 0;
  // setInterval(function () {
  //   document.getElementById("loginLogo").innerHTML = login[i++];
  //   if (i === login.length) i = 0;
  // }, 1500);