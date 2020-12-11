import React, { useState, useEffect } from "react";

const Welcome = () => {
    const welcome = [
        "Welkom",
        "ようこそ" ,
         "أهلًا وسهلًا" ,
          "স্বাগতম।" ,
         "Добре дошъл" ,
         "স্বাগতম।" ,
          "Dobrodošli" ,
         "Benvingut" ,
         "Vítejte" ,
         "Croesawu" ,
         "Velkommen" ,
         "Willkommen" ,
         "Καλώς ήρθες" ,
         "Bienvenido" ,
         "Tere tulemast" ,
         "خوش آمدید" ,
         "Tervetuloa" ,
         "Maligayang pagdating" ,
         "Ni Matavinaka mai" ,
         "Bienvenue" ,
         "Je vous souhaite la bienvenue" ,
         "Fáilte" ,
         "સ્વાગત છે" ,
         "ברוך הבא" ,
         "स्वागत है।" ,
         "Dobrodošao" ,
         "Byenvini" ,
         "Isten hozott" ,
         "Selamat datang" ,
         "Velkominn" ,
         "Benvenuto" ,
         "Қош келдіңіз" ,
         "Bi xêr hatî" ,
         "ಸ್ವಾಗತ" ,
         "환영" ,
         "بەخێربێیت" ,
         "sveikas atvykęs" ,
         "laipni lūdzam" ,
         "Tonga soa" ,
         "Nau mai" ,
         "സ്വാഗതം" ,
         "स्वागत आहे" ,
         "Selamat datang" ,
         "Merħba" ,
         "Zoo siab tos txais" ,
          "velkommen" ,
         "Welkom" ,
         "ସ୍ୱାଗତମ୍‌।" ,
         "Hogu̲ntso̲ho̲" ,
         "ਸਵਾਗਤ ਹੈ।" ,
         "Zapraszamy" ,
         "خوش آمدید" ,
         "ښه راغلاست " ,
         "Bem-vindo" ,
         "Bem-vindos" ,
         "bun venit" ,
         "Приветствовать" ,
         "vitaj" ,
         "dobrodošli" ,
         "Susu maia" ,
         "Добродољли" ,
         "Dobrodoљli",
         "Välkommen",
         "Karibu",
         "வருக" ,
         "స్వాగతం",
         "ยินดี ต้อน รับ สู่" ,
         "Mālō e lelei",
         "Hoş geldi -niz",
         "Manava",
         "Прошу",
         "خوش آمدید" ,
         "Chào mừng",
         "Máanen" ,
         "歡迎",
         "欢迎", 
         "歡迎" 
    ];

    const [currentWelcome, setWelcome] = useState("Welcome")
    let welcomeIndex = 0;
    const nextWelcome = () => {if(welcomeIndex !== welcome.length){setWelcome(welcome[welcomeIndex++])} else {welcomeIndex = 0}}

    useEffect(
        () => {
            const id = setInterval(nextWelcome, 1000);
            return () => id;
        },
        []
    );

    return <span id="welcome">{currentWelcome}</span>;
};

export default Welcome;
