import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'


function App() {

// const llamar = () => {
  
// }
  const [t, i18n] = useTranslation("global");
  return (
    <div className="App">
        <div className="cont-general">

          <div className="title">
            <h1>{t("header.hello-world")}</h1>
          </div>

          <div className="cont-botones">
              <button className="buttons" onClick={() => i18n.changeLanguage("es")}>{t("botones.boton-es")}</button>
              <button className="buttons" onClick={() => i18n.changeLanguage("en")}>{t("botones.boton-en")}</button>
              <button className="buttons" onClick={() => i18n.changeLanguage("it")}>{t("botones.boton-it")}</button>
              <button className="buttons" onClick={() => i18n.changeLanguage("al")}>{t("botones.boton-al")}</button>
              <button className="buttons" onClick={() => i18n.changeLanguage("ch")}>{t("botones.boton-ch")}</button>
          </div>
       </div>

    <div className="texto container">
        <p>
          {t("textos.texto")}
        </p>
    </div>
    
    </div>
  );
}

export default App;
