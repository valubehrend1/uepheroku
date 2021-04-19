import React from 'react';

import { scroller } from "react-scroll";
import { Card, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import './EnergiaSolar.css'


const EnergiaSolar = () => {
    const [t] = useTranslation('EnergiaSolarTranslation');
    return (
        <div className="energiaSolar" id="energiaSolar">
            <Card className='card-container'>
                <Card.Body id='card-body'>
                    <Card.Img className='image energia-img' variant='top' src={require('../Images/energia.png')} />
                    <p className='product-title-energia'>{t('title.title')}</p>
                    <p className='product-subtitle-energia'>{t('subtitle.subtitle')}</p>
                    <Card.Text className='block-text-energia'>
                        {t('parrafo1.linea1')}<br />
                        {t('parrafo1.linea2')}<br />
                        {t('parrafo1.linea3')}
                    </Card.Text>
                    <Card.Text className='block-text-energia-black'>
                        {t('parrafo2.linea1')}<br />
                        {t('parrafo2.linea2')}<br />
                        {t('parrafo2.linea3')}
                    </Card.Text>
                </Card.Body>
                <Button href='#form' className='hire-btn energia' onClick={() => scroller.scrollTo('form', { smooth: true, offset: -100, duration: 1100, })}>{t('button.title')}</Button>
            </Card>

        </div>
    );
};


export default EnergiaSolar;