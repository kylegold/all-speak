const TranslatorLanguages = [
	{
		code: "cl",
		language: "Choose Your Language...",
		nativeName: "Choose Your Language"
	},
	{ code: "af", language: "Afrikaans", nativeName: "Afrikaans" },
	{ code: "ar", language: "Arabic", nativeName: "العربية" },
	{ code: "as", language: "Assamese", nativeName: "Assamese" },
	{ code: "bg", language: "Bulgarian", nativeName: "Български" },
	{ code: "bn", language: "Bangla", nativeName: "বাংলা" },
	{
		code: "bs",
		language: "Bosnian",
		nativeName: "bosanski (latinica)"
	},
	{ code: "ca", language: "Catalan", nativeName: "Català" },
	{ code: "cs", language: "Czech", nativeName: "Čeština" },
	{ code: "cy", language: "Welsh", nativeName: "Welsh" },
	{ code: "da", language: "Danish", nativeName: "Dansk" },
	{ code: "de", language: "German", nativeName: "Deutsch" },
	{ code: "el", language: "Greek", nativeName: "Ελληνικά" },
	{ code: "en", language: "English", nativeName: "English" },
	{ code: "es", language: "Spanish", nativeName: "Español" },
	{ code: "et", language: "Estonian", nativeName: "Eesti" },
	{ code: "fa", language: "Persian", nativeName: "Persian" },
	{ code: "fi", language: "Finnish", nativeName: "Suomi" },
	{ code: "fil", language: "Filipino", nativeName: "Filipino" },
	{ code: "fj", language: "Fijian", nativeName: "Fijian" },
	{ code: "fr", language: "French", nativeName: "Français" },
	{
		code: "fr-ca",
		language: "French (Canada)",
		nativeName: "French (Canada)"
	},
	{ code: "ga", language: "Irish", nativeName: "Gaeilge" },
	{ code: "gu", language: "Gujarati", nativeName: "ગુજરાતી" },
	{ code: "he", language: "Hebrew", nativeName: "עברית" },
	{ code: "hi", language: "Hindi", nativeName: "हिंदी" },
	{ code: "hr", language: "Croatian", nativeName: "Hrvatski" },
	{
		code: "ht",
		language: "Haitian Creole",
		nativeName: "Haitian Creole"
	},
	{ code: "hu", language: "Hungarian", nativeName: "Magyar" },
	{ code: "id", language: "Indonesian", nativeName: "Indonesia" },
	{ code: "is", language: "Icelandic", nativeName: "Íslenska" },
	{ code: "it", language: "Italian", nativeName: "Italiano" },
	{ code: "ja", language: "Japanese", nativeName: "日本語" },
	{ code: "kk", language: "Kazakh", nativeName: "Kazakh" },
	{
		code: "kmr",
		language: "Kurdish (Northern)",
		nativeName: "Kurdish (Northern)"
	},
	{ code: "kn", language: "Kannada", nativeName: "ಕನ್ನಡ" },
	{ code: "ko", language: "Korean", nativeName: "한국어" },
	{
		code: "ku",
		language: "Kurdish (Central)",
		nativeName: "Kurdish (Central)"
	},
	{ code: "lt", language: "Lithuanian", nativeName: "Lietuvių" },
	{ code: "lv", language: "Latvian", nativeName: "Latviešu" },
	{ code: "mg", language: "Malagasy", nativeName: "Malagasy" },
	{ code: "mi", language: "Maori", nativeName: "Māori" },
	{ code: "ml", language: "Malayalam", nativeName: "മലയാളം" },
	{ code: "mr", language: "Marathi", nativeName: "मराठी" },
	{ code: "ms", language: "Malay", nativeName: "Melayu" },
	{ code: "mt", language: "Maltese", nativeName: "Il-Malti" },
	{ code: "mww", language: "Hmong Daw", nativeName: "Hmong Daw" },
	{ code: "nb", language: "Norwegian", nativeName: "Norsk" },
	{ code: "nl", language: "Dutch", nativeName: "Nederlands" },
	{ code: "or", language: "Odia", nativeName: "Odia" },
	{
		code: "otq",
		language: "Querétaro Otomi",
		nativeName: "Querétaro Otomi"
	},
	{ code: "pa", language: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
	{ code: "pl", language: "Polish", nativeName: "Polski" },
	{ code: "prs", language: "Dari", nativeName: "Dari" },
	{ code: "ps", language: "Pashto", nativeName: "Pashto" },
	{
		code: "pt",
		language: "Portuguese (Brazil)",
		nativeName: "Português (Brasil)"
	},
	{
		code: "pt-pt",
		language: "Portuguese (Portugal)",
		nativeName: "Português (Portugal)"
	},
	{ code: "ro", language: "Romanian", nativeName: "Română" },
	{ code: "ru", language: "Russian", nativeName: "Русский" },
	{ code: "sk", language: "Slovak", nativeName: "Slovenčina" },
	{ code: "sl", language: "Slovenian", nativeName: "Slovenščina" },
	{ code: "sm", language: "Samoan", nativeName: "Samoan" },
	{
		code: "sr-Cyrl",
		language: "Serbian (Cyrillic)",
		nativeName: "srpski (ćirilica)"
	},
	{
		code: "sr-Latn",
		language: "Serbian (Latin)",
		nativeName: "srpski (latinica)"
	},
	{ code: "sv", language: "Swedish", nativeName: "Svenska" },
	{ code: "sw", language: "Swahili", nativeName: "Kiswahili" },
	{ code: "ta", language: "Tamil", nativeName: "தமிழ்" },
	{ code: "te", language: "Telugu", nativeName: "తెలుగు" },
	{ code: "th", language: "Thai", nativeName: "ไทย" },
	{
		code: "tlh-Latn",
		language: "Klingon (Latin)",
		nativeName: "Klingon (Latin)"
	},
	{
		code: "tlh-Piqd",
		language: "Klingon (pIqaD)",
		nativeName: "Klingon (pIqaD)"
	},
	{ code: "to", language: "Tongan", nativeName: "lea fakatonga" },
	{ code: "tr", language: "Turkish", nativeName: "Türkçe" },
	{ code: "ty", language: "Tahitian", nativeName: "Tahitian" },
	{ code: "uk", language: "Ukrainian", nativeName: "Українська" },
	{ code: "ur", language: "Urdu", nativeName: "اردو" },
	{ code: "vi", language: "Vietnamese", nativeName: "Tiếng Việt" },
	{ code: "yua", language: "Yucatec Maya", nativeName: "Yucatec Maya" },
	{
		code: "yue",
		language: "Cantonese (Traditional)",
		nativeName: "粵語 (繁體中文)"
	},
	{
		code: "zh-Hans",
		language: "Chinese Simplified",
		nativeName: "简体中文"
	},
	{
		code: "zh-Hant",
		language: "Chinese Traditional",
		nativeName: "繁體中文"
	}
];

const ChooseLanguage = [
	{ af: "Kies jou taal" },
	{ ar: "اختر لغتك" },
	{ as: "আপোনাৰ ভাষা বাচনি কৰক" },
	{ bg: "Изберете вашия език" },
	{ bn: "আপনার ভাষা চয়ন করুন" },
	{ bs: "Odaberite svoj jezik" },
	{ ca: "Tria el teu idioma" },
	{ cs: "Vyberte si jazyk" },
	{ cy: "Dewiswch eich Iaith" },
	{ da: "Vælg dit sprog" },
	{ de: "Wählen Sie Ihre Sprache" },
	{ el: "Επιλέξτε τη γλώσσα σας" },
	{ en: "Choose your Language" },
	{ es: "Elige tu idioma" },
	{ et: "Vali oma keel" },
	{ fa: "زبان خود را انتخاب کنید" },
	{ fi: "Valitse kieli" },
	{ fil: "Piliin ang iyong Wika" },
	{ fj: "Digitaka na nomu vosa" },
	{ fr: "Choisissez votre langue" },
	{ "fr-CA": "Choisissez votre langue" },
	{ ga: "Roghnaigh do Theanga" },
	{ gu: "તમારી ભાષા પસંદ કરો" },
	{ he: "בחר את השפה שלך" },
	{ hi: "अपनी भाषा चुनें" },
	{ hr: "Odaberite svoj jezik" },
	{ ht: "Chwazi lang ou" },
	{ hu: "Válassza ki a nyelvet" },
	{ id: "Pilih Bahasa Anda" },
	{ is: "Veldu þitt tungumál" },
	{ it: "Scegli la tua lingua" },
	{ ja: "言語を選択する" },
	{ kk: "Тілді таңдау" },
	{ kmr: "Zimanê xwe hilbijêre" },
	{ kn: "ನಿಮ್ಮ ಭಾಷೆಆಯ್ಕೆಮಾಡಿ" },
	{ ko: "언어 선택" },
	{ ku: "زمانەکەت هەڵبژێرە" },
	{ lt: "Pasirinkite kalbą" },
	{ lv: "Izvēlieties savu valodu" },
	{ mg: "Fidio ny fiteninao" },
	{ mi: "Kōwhiria tō Reo" },
	{ ml: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക" },
	{ mr: "तुमची भाषा निवडा" },
	{ ms: "Pilih Bahasa anda" },
	{ mt: "Agħżel il-Lingwa tiegħek" },
	{ mww: "Xaiv koj Hom Lus" },
	{ nb: "Velg språk" },
	{ nl: "Kies uw taal" },
	{ or: "ଆପଣଙ୍କର ଭାଷା ବାଛନ୍ତୁ" },
	{ otq: "Gi jwahni ir hñä" },
	{ pa: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ" },
	{ pl: "Wybierz swój język" },
	{ prs: "زبان خود را انتخاب کنید" },
	{ ps: "خپله ژبه وټاکئ" },
	{ pt: "Escolha seu idioma" },
	{ "pt-PT": "Escolha o seu Idioma" },
	{ ro: "Alegeți limba dvs." },
	{ ru: "Выберите свой язык" },
	{ sk: "Vyberte si jazyk" },
	{ sl: "Izberite jezik" },
	{ sm: "Filifili lau Gagana" },
	{ "sr-Cyrl": "Одаберите језик" },
	{ "sr-Latn": "Odaberite jezik" },
	{ sv: "Välj språk" },
	{ sw: "Chagua Lugha yako" },
	{ ta: "உங்கள் மொழியைத் தேர்வுசெய்யவும்" },
	{ te: "మీ భాషను ఎంచుకోండి" },
	{ th: "เลือกภาษาของคุณ" },
	{ "tlh-Latn": "molwI'" },
	{ "tlh-Piqd": "" },
	{ to: "Fili hoʻo lea fakafonua" },
	{ tr: "Dilinizi Seçin" },
	{ ty: "Maiti i to outou reo" },
	{ uk: "Виберіть свою мову" },
	{ ur: "اپنی زبان کا انتخاب کریں" },
	{ vi: "Chọn ngôn ngữ của bạn" },
	{ yua: "Elige a t'aano'" },
	{ yue: "選擇您的語言" },
	{ "zh-Hans": "选择您的语言" },
	{ "zh-Hant": "選擇您的語言" }
];

const LanguagePack = x => {
	if (x) {
		return TranslatorLanguages;
	} else {
		return ChooseLanguage;
	}
};

export default LanguagePack;
