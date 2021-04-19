import React from 'react';

import { Card } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import './AboutUs.css';

const AboutUs = () => {
    const [t] = useTranslation('AboutUsTranslation');
    return (
        <div className='aboutUs' id='aboutUs'>
            <Card className='card-container'>
                <Card.Body id='card-body'>
                    <p className='product-title-about'>{t('title.title')}</p>
                    <p className='product-subtitle-about first-sub'>{t('subtitle.subtitle')}</p><p className='product-subtitle-about second-sub'>{t('subtitle.subtitle2')}</p>
                    <p className='product-subtitle-about'>{t('subtitle.subtitle3')}</p>
                    <Card.Text className='block-text-about'>
                        {t('parrafo1.linea1')} <br />
                        {t('parrafo1.linea2')}<br />
                        {t('parrafo1.linea3')}
                    </Card.Text>
                    <Card.Text className='block-text-about2'>
                        {t('parrafo2.linea1a')}<span className='bold-type'>{t('parrafo2.linea1b')}</span> {t('parrafo2.linea1c')}<br />
                        {t('parrafo2.linea2')}<br />
                        {t('parrafo2.linea3')}
                    </Card.Text>
                    <Card.Text className='block-text-about2'>
                        {t('parrafo3.linea1')}<br />
                        {t('parrafo3.linea2')}<br />
                        {t('parrafo3.linea3')}<br />
                        {t('parrafo3.linea4')}
                    </Card.Text>
                    <Card.Img className='ondas-detail' src={require('../Images/ondas.png')} />
                    <p className='product-subtitle-about-small'>{t('subtitle-about.subtitle')}</p>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>{t('parrafo4.linea1')}</span>{t('parrafo4.linea1b')}<br />
                        {t('parrafo4.linea2')}<span className='bold-type'>{t('parrafo4.linea2b')}</span>{t('parrafo4.linea2c')}<span className='bold-type'>{t('parrafo4.linea2d')}</span><br />
                        {t('parrafo4.linea3')}<span className='bold-type'>{t('parrafo4.linea3b')}</span><br />
                        {t('parrafo4.linea4')}<br />
                        {t('parrafo4.linea5')}<span className='bold-type'>{t('parrafo4.linea5b')}</span><br />
                        {t('parrafo4.linea6')}
                    </Card.Text>
                    <Card.Img className='ondas-detail' src={require('../Images/ondas.png')} />
                    <p className='product-subtitle-about-small'><span className='bold-type'>{t('subtitle-about2.subtitle')}</span></p>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>1.</span><br />
                        <span className='bold-type'>{t('parrafo5.linea1')}</span><br />
                        {t('parrafo5.linea2')}<br />
                        {t('parrafo5.linea3')}
                    </Card.Text>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>2.</span><br />
                        <span className='bold-type'>{t('parrafo6.linea1')}</span><br />
                        {t('parrafo6.linea2')}<br />
                        {t('parrafo6.linea3')}<br />
                        {t('parrafo6.linea4')}<br />
                        {t('parrafo6.linea5')}<br />
                        {t('parrafo6.linea6')}
                    </Card.Text>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>3.</span><br />
                        <span className='bold-type'>{t('parrafo7.linea1')}</span><br />
                        {t('parrafo7.linea2')}<br />
                        {t('parrafo7.linea3')}<br />
                        {t('parrafo7.linea4')}<br />
                        {t('parrafo7.linea5')}
                    </Card.Text>
                    <Card.Img className='ondas-detail' src={require('../Images/ondas.png')} />
                    <p className='product-subtitle-about-small'><span className='bold-type'>{t('subtitle-about3.subtitle')}</span></p>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>{t('parrafo8.linea1')}</span><br />
                        {t('parrafo8.linea2')}<br />
                        {t('parrafo8.linea3')}<br />
                        {t('parrafo8.linea4')}<br />
                        <span className='bold-type'>{t('parrafo8.linea5')}</span>{t('parrafo8.linea5b')}<br />
                        <span className='bold-type'>{t('parrafo8.linea6')}</span>
                    </Card.Text>
                    <Card.Text className='block-text-about2'>
                        <span className='bold-type'>{t('footer-text.title')}</span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};


export default AboutUs;
