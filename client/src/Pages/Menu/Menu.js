import React from 'react';


import MenuOption from '../../Components/Menu/MenuOptions';
import { Navbar, Nav } from 'react-bootstrap';
import '../../Components/Menu/Menu.css'
import '../Productos/Productos.js'
import logo from '../Images/logo.png'

import { useTranslation } from 'react-i18next';

import { scroller } from "react-scroll";

const Menu = () => {
    const [t, i18n] = useTranslation(['AboutUsTranslation', 'MenuTranslation']);
    return (
        <div className="navbar-container sticky-top">
            <Navbar collapseOnSelect expand="lg" className="navbar-menu">
                <Navbar.Brand
                    href="#home"
                    onClick={() => scroller.scrollTo('header', { smooth: true, offset: -150, duration: 1000, })}>
                    <img src={logo} width= "120px" alt="" className= "img-brand"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <MenuOption
                            className='nav-right'
                            onClick={() => scroller.scrollTo('productos', { smooth: true, offset: -120, duration: 1700, })}
                            label={t('MenuTranslation:nav.title')} />
                        <MenuOption
                            className='nav-right'
                            onClick={() => scroller.scrollTo('aboutUs', { smooth: true, offset: -128, duration: 1700, })}
                            label={t('MenuTranslation:nav2.title')} />
                        <MenuOption
                            className='nav-right'
                            onClick={() => scroller.scrollTo('colabora', { smooth: true, offset: -125, duration: 1700, })}
                            label={t('MenuTranslation:nav3.title')} />
                        <MenuOption
                            className="nav-right hire-class"
                            onClick={() => scroller.scrollTo('form', { smooth: true, offset: -150, duration: 1700, })}
                            label={t('MenuTranslation:nav4.title')} />
                    </Nav>
                    <Nav className="navbar-nav-languages">
                        <MenuOption
                            className='language'
                            label="EN"
                            onClick={() => i18n.changeLanguage("en")} />
                        <span className="slash">/</span>
                        <MenuOption
                            className='language'
                            label="ES"
                            onClick={() => i18n.changeLanguage("es")} />
                        <span className="slash">/</span>
                        <MenuOption
                            className='language'
                            label="DE"
                            onClick={() => i18n.changeLanguage("de")} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};


export default Menu;
