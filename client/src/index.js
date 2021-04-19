import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";

import aboutUs_es from './Translations/es/AboutUsTranslation/AboutUsTranslation.json';
import aboutUs_en from './Translations/en/AboutUsTranslation/AboutUsTranslation.json';
import aboutUs_de from './Translations/de/AboutUsTranslation/AboutUsTranslation.json';

import menuTranslation_es from './Translations/es/MenuTranslation/MenuTranslation.json';
import menuTranslation_en from './Translations/en/MenuTranslation/MenuTranslation.json';
import menuTranslation_de from './Translations/de/MenuTranslation/MenuTranslation.json';

import colaboraTranslation_es from './Translations/es/ColaboraTranslation/ColaboraTranslation.json';
import colaboraTranslation_en from './Translations/en/ColaboraTranslation/ColaboraTranslation.json';
import colaboraTranslation_de from './Translations/de/ColaboraTranslation/ColaboraTranslation.json';

import energiaSolarTranslation_es from './Translations/es/EnergiaSolarTranslation/EnergiaSolarTranslation.json';
import energiaSolarTranslation_en from './Translations/en/EnergiaSolarTranslation/EnergiaSolarTranslation.json';
import energiaSolarTranslation_de from './Translations/de/EnergiaSolarTranslation/EnergiaSolarTranslation.json';

import footerTranslation_es from './Translations/es/FooterTranslation/FooterTranslation.json';
import footerTranslation_en from './Translations/en/FooterTranslation/FooterTranslation.json';
import footerTranslation_de from './Translations/de/FooterTranslation/FooterTranslation.json';

import formTranslation_es from './Translations/es/FormTranslation/FormTranslation.json';
import formTranslation_en from './Translations/en/FormTranslation/FormTranslation.json';
import formTranslation_de from './Translations/de/FormTranslation/FormTranslation.json';

import gasTranslation_es from './Translations/es/GasTranslation/GasTranslation.json';
import gasTranslation_en from './Translations/en/GasTranslation/GasTranslation.json';
import gasTranslation_de from './Translations/de/GasTranslation/GasTranslation.json';

import headerTranslation_es from './Translations/es/HeaderTranslation/HeaderTranslation.json';
import headerTranslation_en from './Translations/en/HeaderTranslation/HeaderTranslation.json';
import headerTranslation_de from './Translations/de/HeaderTranslation/HeaderTranslation.json';

import productosTranslation_es from './Translations/es/ProductosTranslation/ProductosTranslation.json';
import productosTranslation_en from './Translations/en/ProductosTranslation/ProductosTranslation.json';
import productosTranslation_de from './Translations/de/ProductosTranslation/ProductosTranslation.json';



i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            AboutUsTranslation: aboutUs_es,
            MenuTranslation: menuTranslation_es,
            ColaboraTranslation: colaboraTranslation_es,
            EnergiaSolarTranslation: energiaSolarTranslation_es,
            FooterTranslation: footerTranslation_es,
            FormTranslation: formTranslation_es,
            GasTranslation: gasTranslation_es,
            HeaderTranslation: headerTranslation_es,
            ProductosTranslation: productosTranslation_es
        },
        en: {
            AboutUsTranslation: aboutUs_en,
            MenuTranslation: menuTranslation_en,
            ColaboraTranslation: colaboraTranslation_en,
            EnergiaSolarTranslation: energiaSolarTranslation_en,
            FooterTranslation: footerTranslation_en,
            FormTranslation: formTranslation_en,
            GasTranslation: gasTranslation_en,
            HeaderTranslation: headerTranslation_en,
            ProductosTranslation: productosTranslation_en
        },
        de: {
            AboutUsTranslation: aboutUs_de,
            MenuTranslation: menuTranslation_de,
            ColaboraTranslation: colaboraTranslation_de,
            EnergiaSolarTranslation: energiaSolarTranslation_de,
            FooterTranslation: footerTranslation_de,
            FormTranslation: formTranslation_de,
            GasTranslation: gasTranslation_de,
            HeaderTranslation: headerTranslation_de,
            ProductosTranslation: productosTranslation_de
        },
    },
})

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);
registerServiceWorker();
