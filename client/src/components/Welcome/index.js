import React, { useState, useEffect, useRef } from "react";
import Shuffle from "../../utils/fischerYatesShuffle.js";

// Animation Dependencies;
// =============:
import { flip } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import swing from "react-animations/lib/swing";

// Animation Styles;
// =============:
const styles = StyleSheet.create({
	pulse: {
		animationDelay: "2000ms",
		"animation-fill-mode": "both",
		animationName: flip,
		animationDuration: "1000ms"
	}
});

const Welcome = () => {
	const welcomeBlock = useRef();

	const welcome = [
		"Welkom",
		"أهلًا وسهلًا",
		"স্বাগতম।",
		"Добре дошъл",
		"স্বাগতম।",
		"Dobrodošli",
		"Benvingut",
		"Vítejte",
		"Croesawu",
		"Velkommen",
		"Willkommen",
		"Καλώς ήρθες",
		"Welcome",
		"Bienvenido",
		"Tere tulemast",
		"خوش آمدید",
		"Tervetuloa",
		"Maligayang pagdating",
		"Ni Matavinaka mai",
		"Bienvenue",
		"Je vous souhaite la bienvenue",
		"Fáilte",
		"સ્વાગત છે",
		"ברוך הבא",
		"स्वागत है।",
		"Dobrodošao",
		"Byenvini",
		"Isten hozott",
		"Selamat datang",
		"Velkominn",
		"Benvenuto",
		"ようこそ",
		"Қош келдіңіз",
		"Bi xêr hatî",
		"ಸ್ವಾಗತ",
		"환영",
		"بەخێربێیت",
		"sveikas atvykęs",
		"laipni lūdzam",
		"Tonga soa",
		"Nau mai",
		"സ്വാഗതം",
		"स्वागत आहे",
		"Selamat datang",
		"Merħba",
		"Zoo siab tos txais",
		"velkommen",
		"Welkom",
		"ସ୍ୱାଗତମ୍‌।",
		"Hogu̲ntso̲ho̲",
		"ਸਵਾਗਤ ਹੈ।",
		"Zapraszamy",
		"خوش آمدید",
		"ښه راغلاست ",
		"Bem-vindo",
		"Bem-vindos",
		"bun venit",
		"Приветствовать",
		"vitaj",
		"dobrodošli",
		"Susu maia",
		"Добродољли",
		"Dobrodoљli",
		"Välkommen",
		"Karibu",
		"வருக",
		"స్వాగతం",
		"ยินดี ต้อน รับ สู่",
		"yI'el",
		"Mālō e lelei",
		"Hoş geldi -niz",
		"Manava",
		"Прошу",
		"خوش آمدید",
		"Chào mừng",
		"Máanen",
		"歡迎",
		"欢迎",
		"歡迎"
	];

	const shuffledWelcome = Shuffle(welcome);

	const [currentWelcome, setWelcome] = useState("Welcome");
	let welcomeIndex = 0;
	const nextWelcome = () => {
		if (welcomeIndex !== welcome.length) {
			setWelcome(shuffledWelcome[welcomeIndex++]);
		} else {
			welcomeIndex = 0;
		}
	};

	useEffect(() => {
		const id = setInterval(nextWelcome, 3000);
		return () => id;
	}, []);

	return (
		<span ref={welcomeBlock} id="welcome">
			{currentWelcome}
		</span>
	);
};

export default Welcome;
