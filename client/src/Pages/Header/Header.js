import React from 'react';

import { Card } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import './Header.css'

const Header = () => {
    const [t] = useTranslation('HeaderTranslation');
    return (
        <Card className='text-center' id='header'>
            <Card.Body className='body'>
                <Card.Text> {t('title.title')} </Card.Text>
                <Card.Text className='bold-text'>{t('subtitle.subtitle')}</Card.Text>
                <p className='save-button'>{t('parrafo.linea')}</p>
            </Card.Body>
        </Card>
    );
};


export default Header;