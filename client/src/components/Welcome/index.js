import React from 'react';
import "./style.css";

const Welcome = () => {
    const welcome = ["welcome", "歓迎", "приветствовать", "ترحيب", "환영", "välkomna", "υποδέχομαι", "accogliere", "स्वागत हे", "recevoir", "velkominn"];

    var i = 0;
    setInterval(function () {
        document
            .getElementById('welcome')
            .innerHTML = welcome[i++];
        if (i === welcome.length) i = 0;
    }, 1000);

    return (
        <span id="welcome"></span>
    )
};

export default Welcome;