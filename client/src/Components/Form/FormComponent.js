import React from 'react';
import { Form, Container } from 'react-bootstrap';

import './Form.css';

const FormComponent = (props) => {
    return (
        <Container id="form">
            <Form.Group controlId={"formBasic" + props.name}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    as={props.as}
                    className={props.className}
                    rows={props.rows}
                    min={props.min}
                    minLength={props.minlength}
                    required={props.required} />
            </Form.Group>
        </Container>
    );
}

export default FormComponent;


/* <div className='singup-form'>
            <input placeholder='Nombre' type='text'></input>
            <input placeholder='Apellido' type='text'></input>
            <input placeholder='DNI' type='number'></input>
            <input placeholder='Email' type='email'></input>
            <input placeholder='Contraseña'type='password'></input>
            <button type='submit'>Submit</button>
        </div> */