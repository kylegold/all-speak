import React, { useState, useEffect } from "react";

const Welcome = () => {
    const welcome = [
        // English
        "welcome",
        // Chinese
        "歓迎",
        // Russian
        "приветствовать",
        // Arabic
        "ترحيب",
        // Korean
        "환영",
        // Swedish
        "välkomna",
        // Greek
        "υποδέχομαι",
        // Italian
        "accogliere",
        // Hindi
        "स्वागत हे",
        // French
        "accueillir",
        // Icelandic
        "velkominn",
    ];

    const [currentWelcome, setWelcome] = useState("welcome")
    let welcomeIndex = 0;
    const nextWelcome = () => {if(welcomeIndex !== welcome.length){setWelcome(welcome[welcomeIndex++])} else {welcomeIndex = 0}}

    useEffect(
        () => {
            const id = setInterval(nextWelcome, 1000);
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

    return <span id="welcome">{currentWelcome}</span>;
};

export default Welcome;
