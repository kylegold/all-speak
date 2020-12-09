const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

var subscriptionKey = process.env.AZURE_TRANSLATE_KEY;
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "eastus";

function GetLanguages() {
	axios
		.get(
			"https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation"
		)
		.then(res => {
			return res.data.map(lang => ({ language: lang.name, code: lang }));
		});
}

function Translate(initialLanguage, targetLanguage, phraseToTranslate) {
	axios({
		baseURL: endpoint,
		url: "/translate",
		method: "post",
		headers: {
			"Ocp-Apim-Subscription-Key": subscriptionKey,
			"Ocp-Apim-Subscription-Region": location,
			"Content-type": "application/json",
			"X-ClientTraceId": uuidv4().toString()
		},
		params: {
			"api-version": "3.0",
			from: initialLanguage,
			to: targetLanguage
		},
		data: [
			{
				text: phraseToTranslate
			}
		],
		responseType: "json"
	}).then(function (response) {
		return JSON.stringify(response.data, null, 4);
	});
}

export default { Translate, GetLanguages };
