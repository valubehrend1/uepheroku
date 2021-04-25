import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import '../../App.css';

const Whatsapp = () => {
    // const [t] = useTranslation('ProductosTranslation');
    return (
        <div className="whatsapp my-float">
            <a className="contact-whats" href='https://api.whatsapp.com/send?phone=+34697770797&text=Hola!%20Quiero%20contratar%20sus%20servicios!'>
                <FaWhatsapp className="icon" />
                <span>Contact Us</span>
            </a>
        </div>
    );
};


export default Whatsapp;