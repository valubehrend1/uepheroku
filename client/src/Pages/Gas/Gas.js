import React from 'react';

import { scroller } from "react-scroll";

import { Card, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import './Gas.css'


const Gas = () => {
    const [t] = useTranslation('GasTranslation');
    return (
        <div className="gas" id="gas">
            <Card className='card-container'>
                <Card.Body id='card-body'>
                    <Card.Img className='image fire-img' variant='top' src={require('../Images/fuego.png')} />
                    <p className='product-title-gas'>{t('title.title')}</p>
                    <p className='product-subtitle-gas'>{t('subtitle.subtitle')}</p>
                    <Card.Text className='block-text-gas'>
                        {t('parrafo1.linea1')}
                        <span className='bold-type'>
                            {t('parrafo1.linea2')}</span>
                        {t('parrafo1.linea2b')} <br />
                        <span className='bold-type'>
                            {t('parrafo1.linea3')}
                        </span>
                    </Card.Text>
                </Card.Body>
                <Button href='#form' className='hire-btn gas' onClick={() => scroller.scrollTo('form', { smooth: true, offset: -100, duration: 1100, })}>{t('button.name')}</Button>
            </Card>

        </div>
    );
};


export default Gas;