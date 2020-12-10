import React from "react";
import "./style.css";

const Welcome = () => {
    const welcome = [
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

    var i = 0;
    setInterval(function () {
        document
            .getElementById('welcome')
            .innerHTML = welcome[i++];
        if (i === welcome.length) i = 0;
    }, 2000);

    return <span id="welcome">welcome</span>;
};

export default Welcome;
