import React from 'react';

import { Nav } from 'react-bootstrap';

const MenuOption = (props) => {
    const {label, href, onClick, to, className} = props
    return(
        <Nav.Link onClick={onClick} href={href} to={to} className={className}>{label}</Nav.Link>
    );
};

export default MenuOption;

