import React from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import ChooseLanguageCar from "../../components/ChooseLanguageCar";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import Background from "../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg";
// import LanguageChoiceBox from "../../components/LanguageChoiceBox";

const ChooseLanguage = () => {
  const translatorLanguages = [
    {
      code: "cl",
      language: "Choose Your Language...",
      nativeName: "Choose Your Language",
    },
    { code: "af", language: "Afrikaans", nativeName: "Afrikaans" },
    { code: "ar", language: "Arabic", nativeName: "العربية" },
    { code: "as", language: "Assamese", nativeName: "Assamese" },
    { code: "bg", language: "Bulgarian", nativeName: "Български" },
    { code: "bn", language: "Bangla", nativeName: "বাংলা" },
    {
      code: "bs",
      language: "Bosnian",
      nativeName: "bosanski (latinica)",
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
      nativeName: "French (Canada)",
    },
    { code: "ga", language: "Irish", nativeName: "Gaeilge" },
    { code: "gu", language: "Gujarati", nativeName: "ગુજરાતી" },
    { code: "he", language: "Hebrew", nativeName: "עברית" },
    { code: "hi", language: "Hindi", nativeName: "हिंदी" },
    { code: "hr", language: "Croatian", nativeName: "Hrvatski" },
    {
      code: "ht",
      language: "Haitian Creole",
      nativeName: "Haitian Creole",
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
      nativeName: "Kurdish (Northern)",
    },
    { code: "kn", language: "Kannada", nativeName: "ಕನ್ನಡ" },
    { code: "ko", language: "Korean", nativeName: "한국어" },
    {
      code: "ku",
      language: "Kurdish (Central)",
      nativeName: "Kurdish (Central)",
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
      nativeName: "Querétaro Otomi",
    },
    { code: "pa", language: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
    { code: "pl", language: "Polish", nativeName: "Polski" },
    { code: "prs", language: "Dari", nativeName: "Dari" },
    { code: "ps", language: "Pashto", nativeName: "Pashto" },
    {
      code: "pt",
      language: "Portuguese (Brazil)",
      nativeName: "Português (Brasil)",
    },
    {
      code: "pt-pt",
      language: "Portuguese (Portugal)",
      nativeName: "Português (Portugal)",
    },
    { code: "ro", language: "Romanian", nativeName: "Română" },
    { code: "ru", language: "Russian", nativeName: "Русский" },
    { code: "sk", language: "Slovak", nativeName: "Slovenčina" },
    { code: "sl", language: "Slovenian", nativeName: "Slovenščina" },
    { code: "sm", language: "Samoan", nativeName: "Samoan" },
    {
      code: "sr-Cyrl",
      language: "Serbian (Cyrillic)",
      nativeName: "srpski (ćirilica)",
    },
    {
      code: "sr-Latn",
      language: "Serbian (Latin)",
      nativeName: "srpski (latinica)",
    },
    { code: "sv", language: "Swedish", nativeName: "Svenska" },
    { code: "sw", language: "Swahili", nativeName: "Kiswahili" },
    { code: "ta", language: "Tamil", nativeName: "தமிழ்" },
    { code: "te", language: "Telugu", nativeName: "తెలుగు" },
    { code: "th", language: "Thai", nativeName: "ไทย" },
    {
      code: "tlh-Latn",
      language: "Klingon (Latin)",
      nativeName: "Klingon (Latin)",
    },
    {
      code: "tlh-Piqd",
      language: "Klingon (pIqaD)",
      nativeName: "Klingon (pIqaD)",
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
      nativeName: "粵語 (繁體中文)",
    },
    {
      code: "zh-Hans",
      language: "Chinese Simplified",
      nativeName: "简体中文",
    },
    {
      code: "zh-Hant",
      language: "Chinese Traditional",
      nativeName: "繁體中文",
    },
  ];

  const handleLanguageSelection = (e) => {
    const value = e.target.value
    console.log(value)
  }

  const langArr = translatorLanguages.map((language) => {
    return (language);
  });
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <Container id="container">
          <Row>
            <Col>
              <Card className="text-center" id="card">
                <Card.Body>
                  <img
                    style={{
                      width: "50%",
                      minWidth: "200px",
                      display: "block",
                      margin: "0px auto 20px auto",
                    }}
                    src={Logo}
                    alt="allSpeak"
                  />
                  <ChooseLanguageCar />
                  <div style={{ width: "100%" }}>
                    <Form>
                      <Form.Row className="align-items-center">
                        <Col
                          xs="auto"
                          className="my-1"
                          style={{
                            alignItems: "center",
                            margin: "10px auto 0 auto",
                          }}
                        >
                          <Form.Label
                            className="mr-sm-2"
                            htmlFor="inlineFormCustomSelect"
                            srOnly
                          >
                            Preference
                          </Form.Label>
                          <Form.Control onChange={handleLanguageSelection} 
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                          >
                            {langArr.map((language, i) => {
                              return <option value={language.code}>{language.language}</option>;
                            })}
                          </Form.Control>
                        </Col>
                      </Form.Row>
                      <Form.Row
                        xs="auto"
                        className="my-1"
                        style={{ width: "100%" }}
                      >
                        <Col style={{ margin: "10px auto 0 auto" }}>
                          <Button type="submit" variant="dark">
                            Submit
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ChooseLanguage;
