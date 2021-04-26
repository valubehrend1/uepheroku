import React from 'react';

import { scroller } from "react-scroll";
import { Card, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import './Colabora.css';

const Colabora = () => {
    const [t] = useTranslation('ColaboraTranslation');
    return (
        <div className="colabora" id="colabora">
            <Card className='card-container'>
                <Card.Body id='card-body'>
                    <p className='product-title-colabora bold-type'>
                        {t('title.title')}
                    </p>
                    <p className='product-subtitle-colabora'>
                        {t('subtitle.subtitle')}<br />
                        {t('subtitle.subtitle2')}
                    </p>
                    <Card.Text className='block-text-colabora'>
                        {t('card-text1.title')}
                        <span className='block-text-colabora salto'>
                            {t('card-text1.title2')}
                        </span>
                        <span className='product-subtitle-colabora-small'>
                            {t('card-text2.title')}
                        </span>
                    </Card.Text>
                    <Card.Text className='block-text-colabora'>
                        {t('card-text3.title')}
                    </Card.Text>
                    <Card.Text className='block-text-colabora'>
                        <span className='bold-type'>{t('parrafo1.linea1')}</span><br />
                        <span className='bold-type'>{t('parrafo1.linea2')}</span><br />
                        <span className='bold-type'>{t('parrafo1.linea3')}</span><br />
                        <span className='bold-type'>{t('parrafo1.linea4')}</span>
                    </Card.Text>
                </Card.Body>
                <Button href='#form' className='contact-btn btn-custom' onClick={() => scroller.scrollTo('form', { smooth: true, offset: -155, duration: 1100, })}>{t('button.title')}</Button>
            </Card>
        </div>
    );
};


export default Colabora;
