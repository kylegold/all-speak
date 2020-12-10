import React, { useState, useEffect } from "react";
import "./style.css";

const ChooseLanguageCar = () => {
    const chooseLanguage = [
        // English
        "choose your language",
        // Chinese
        "选择你的语言",
        // Russian
        "bыберите свой язык",
        // Arabic
        "اختر لغتك",
        // Korean
        "당신의 언어를 선택하세요",
        // Swedish
        "välj ditt språk",
        // Greek
        "διάλεξε τη γλώσσα σου",
        // Italian
        "scegliere la lingua",
        // Hindi
        "अपनी भाषा चुनिए",
        // French
        "choisissez votre langue",
        // Icelandic
        "veldu tungumál",
    ];

    const [currentchooseLanguage, setchooseLanguage] = useState("welcome")
    let chooseLanguageIndex = 0;
    const nextChooseLanguage = () => { if (chooseLanguageIndex !== chooseLanguage.length) { setchooseLanguage(chooseLanguage[chooseLanguageIndex++]) } else { chooseLanguageIndex = 0 } }

    useEffect(
        () => {
            const id = setInterval(nextChooseLanguage, 1000);
            return () => id;
        },
        []
    );

    // var i = 0;
    // setInterval(function () {
    //     document
    //         .getElementById('welcome')
    //         .innerHTML = welcome[i++];
    //     if (i === welcome.length) i = 0;
    // }, 2000);

    return <span id="chooseLanguageChar">{currentchooseLanguage}</span>;
};

export default ChooseLanguageCar;
