import React from 'react';

import { Container } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import AvisoLegal from '../../Documents/AvisoLegal.pdf';
import PoliticaDeDatos from '../../Documents/PoliticaDeDatos.pdf';
import PoliticaDeCookies from '../../Documents/PoliticaDeCookies.pdf';


import './Footer.css'


const Footer = () => {
    const [t] = useTranslation('FooterTranslation');
    return (
        <div className='main-footer fill'>
            <Container>
                <div className='row footer-contain'>
                    <div className='col-md-3 col-sm-7 col-xs-2'>
                        <img src={require('../Images/logonaranja.png')} alt=""></img>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <ul className='list-unstyled'>
                            <li className='contact-list'>{t('title.title')}</li>
                            <li className='black-list'>{t('phone.phone')}</li>
                            <li>{t('phone.number')}</li>
                            <li className='black-list'>{t('email.email')}</li>
                            <li>{t('email.address')}</li>
                            <li><a href='https://api.whatsapp.com/send?phone=+34697770797&text=Hola!%20Quiero%20contratar%20sus%20servicios!'><img alt=' ' src={require('../Images/whatsapp.png')} /></a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <ul className='list-unstyled'>
                            <li><br /> </li>
                            <li className='black-list'><a rel="nofollow" href={AvisoLegal} target="_blank">{t('policy.warn')}</a></li>
                            <li className='black-list'><a rel="nofollow" href={PoliticaDeDatos} target="_blank">{t('policy.private')}</a></li>
                            <li className='black-list'><a rel="nofollow" href={PoliticaDeCookies} target="_blank">{t('policy.cookies')}</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
