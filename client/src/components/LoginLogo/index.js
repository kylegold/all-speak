import React from "react";
import "./style.css";

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

  var i = 0;
  setInterval(function () {
    document.getElementById("loginLogo").innerHTML = login[i++];
    if (i === login.length) i = 0;
  }, 1500);

  return <span id="loginLogo">login</span>;
};

export default LoginLogo;
