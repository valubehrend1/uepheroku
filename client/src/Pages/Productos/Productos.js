import React from 'react';

import { Card, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import { scroller } from "react-scroll";

import './Productos.css'

const Productos = () => {
    const [t] = useTranslation('ProductosTranslation');
    // const imgEs = require('../Images/luz-graficoespañol.png');
    // const imgEn = require('../Images/luz-graficocomparativoEn.png');
    // const imgDe = require('../Images/luz-graficocomparativoDe.png');
    return (
        <div className="productos" id="productos">
            <Card className='card-container'>
                <Card.Body>
                    <Card.Img className='image' variant='top' src={require('../Images/rayo.png')} />
                    <p className='product-title-luz bold-type'>{t('title.title')}<br/>{t('title.titleb')}</p>
                    <p className='product-subtitle-luz'>{t('subtitle.subtitle')} <br/>{t('subtitle.subtitle2')}</p>
                    <Card.Text className='block-text-luz'>
                        {t('parrafo.linea1')}<br />
                        {t('parrafo.linea2')}<br />
                        {t('parrafo.linea3')}<br />
                        {t('parrafo.linea4')}<br />
                        {t('parrafo.linea5')}
                    </Card.Text>
                    <Card.Text className='text-footer'>{t('footer.text')}</Card.Text>
                    <Card.Img className='graphic-image' variant='top' src={require('../Images/luz-graficoespañol.png')} />
                </Card.Body>
                <Button href='#form' className='hire-btn luz btn-custom' onClick={() => scroller.scrollTo('form', { smooth: true, offset: -155, duration: 1100, })}>{t('button.title')}</Button>
            </Card>

        </div>
    );
};


export default Productos;
