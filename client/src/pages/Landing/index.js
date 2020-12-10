import React from 'react';
import Welcome from '../../components/Welcome';
import Logo from '../../assets/png/all_speak_v2_Logo_Black.png'


const Landing = () => {
    return (
        <>
            <Welcome /> <br />
            <img style={{ width: "40%", display: "block", margin: "auto" }} src={Logo} />

        </>
    )
};

export default Landing;