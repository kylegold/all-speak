// Dependencies;
// =============:
import React,{ useEffect, useState } from "react";
import LanguagePack  from "../../context/LanguagePack"
import { useGlobalContext } from "../../context/GlobalContext"

import { Form } from "react-bootstrap";
import { Formik } from "formik";


const ChangeLanguage = ({ carousel }) => {
  const [languageCarousel, setLanguageCarousel] = useState("Choose your Language");
  const [state, dispatch] = useGlobalContext();

  let clIndex = 0;
  const nextChooseLanguage = () => {
    const ChooseLanguage = LanguagePack(false)
    let currentLang = Object.keys(ChooseLanguage[clIndex])[0];
    if (clIndex !== ChooseLanguage.length) {
      setLanguageCarousel(ChooseLanguage[clIndex++][currentLang]);
    } else {
      clIndex = 0;
    } 
  };

  useEffect(() => {
    if(carousel){
      const id = setInterval(nextChooseLanguage, 3000);
      return () => id;
    }
  }, []);
  return (
    <Formik
      initialValues={{
        lang: "",
      }}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit,
        } = formik;
  return (
    <>
    <div>
      <Form>
        { carousel ? <span id="chooseLanguageChar">{languageCarousel}</span>: null}
        <Form.Control
          name="lang"
          value={values.lang}
          // onClick={handleChange}
          onBlur={ event => {
            event.preventDefault()
            handleBlur(event)
              dispatch({
                type: "CHANGE_LANGUAGE",
                lang: values.lang
              })
          }}
          onChange={ event => {
            event.preventDefault()
            handleChange(event)
              dispatch({
                type: "CHANGE_LANGUAGE",
                lang: values.lang
              })
          }}
          as="select"
          className="mt-4 mb-4"
          id="changeLangForm"
          custom
          >
          {LanguagePack(true).map((language, i) => {
            return (
              <option key={i} value={language.code} >
                {language.nativeName}
              </option>
            );
          })}
        </Form.Control>
      </Form>
    </div>
    </>
  );
}}
</Formik>
  )
}

export default ChangeLanguage;
