const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

var subscriptionKey = process.env.AZURE_TRANSLATE_KEY;
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "eastus";

// Get Language List;
// =============:
function GetLanguages() {
	return axios
		.get(
			"https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation"
		)
		.then(res => {
			const response = res.data.translation;
			return Object.keys(response).map(lang => ({
				code: lang,
				name: response[lang].name,
				native: response[lang].nativeName
			}));
		});
}

// UI Helper; - plug sting in to translate into every language; USE SPARINGLY!
// - UNCOMMENT EXPORT (BELOW) - run "npm run uihelper";
// =============:
// uiHelper("Sign up");
// =============:
function uiHelper(phraseToTranslate) {
	GetLanguages()
		.then(async res => {
			const response = res;
			const results = await Promise.all(
				response.map(async res => {
					return await Translate("en", res.code, phraseToTranslate);
				})
			);
			return results;
		})
		.then(res => console.log(res));
}

// Translate Function;
// =============:
function Translate(initialLanguage, targetLanguage, phraseToTranslate) {
	return axios({
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
	}).then(({ data }) => {
		return {
			[data[0].translations[0].to]: data[0].translations[0].text
		};
	});
}

// Comment out to use uiHelper;
// =============:
export default { Translate, GetLanguages };
