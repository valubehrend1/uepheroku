import React from 'react';
import { useState } from 'react';

import { Form, Button, Container, Spinner, Col, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import FormComponent from '../../Components/Form/FormComponent';
import PoliticaDeDatos from '../../Documents/PoliticaDeDatos.pdf';

const FormPage = () => {
    const [t] = useTranslation('FormTranslation');
    
    const [form, setForm] = useState({
        nameForm: '',
        email: '',
        phone: '',
        file: '',
        asunto: '',
        option: '',
    });

    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);


    const handleChangeFile = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.files[0],
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        for (const name in form) {
            formData.append(name, form[name]);
        }

        fetch('users/email', {
            mode: 'no-cors',
            method: 'POST',
            body: formData // JSON.stringify(form)
        })
            .then(res => {
                setLoading(false)
            })
        setShow(true)
        setLoading(true)
    }
    return (
        <Container className="form-container" id="form">
            <p className='product-title-form'>{t('title.title')}</p>
            <p className='product-subtitle-form'>{t('subtitle.subtitle')}</p>

            <Alert variant={'success'} show={show} data-dismiss="alert">
                {t('sent.sent')}
            </Alert>

            {!show && <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormComponent 
                    type="text" 
                    placeholder={t('placeholder.nameForm')} 
                    name="nameForm" value={form.name} 
                    required
                    onChange={handleChange} />
                <FormComponent 
                    type="email" 
                    placeholder={t('placeholder.email')} 
                    name="email" 
                    value={form.email} 
                    required
                    onChange={handleChange} />
                <FormComponent 
                    min='0' 
                    minLength='5' 
                    type="number" 
                    placeholder={t('placeholder.phone')} 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} />
                <Form.Group
                    as={Col}
                    controlId="formGridState">
                    <Form.Control 
                        required 
                        as="select" 
                        className="mr-sm-2" 
                        name="option" 
                        value={form.option} 
                        onChange={handleChange}>
                        <option id='form-options' value="¿QUÉ ESTÁS BUSCANDO?">{t('dropdown.value1')}</option>
                        <option id='form-options' value="QUIERO AHORRAR">{t('dropdown.value2')}</option>
                        <option id='form-options' value="QUIERO COLABORAR">{t('dropdown.value3')}</option>
                    </Form.Control>
                    <Form.Group>
                        <Form.File
                            custom
                            label={form.file ? form.file.name : ""}
                            data-browse={t('file.value')}
                            id="custom-file"
                            name="file"
                            // value={form.file}
                            onChange={handleChangeFile} />
                    </Form.Group>
                </Form.Group>
                    <FormComponent
                    required 
                    type="text" 
                    placeholder={t('message.asunto')} 
                    as="textarea" 
                    rows={9} 
                    name="asunto" 
                    value={form.asunto} 
                    onChange={handleChange} />
                <Container className='form-sbmt'>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            required
                            feedback="You must agree before submitting."
                            type="checkbox" label={t('terms.agree')}
                            className='termsConditions'
                        />
                        <p className='termsConditions'><a href={PoliticaDeDatos} target="_blank"><span className='bold-type'>{t('terms.privacy')}</span></a> {t('terms.german')}</p>
                    </Form.Group>
                    <Button className="sbm-btn" variant="primary" type="submit">
                        {loading &&
                            <Spinner animation="border" size="sm">
                                <span className="sr-only">{t('spinner.carga')}</span>
                            </Spinner>}
                        {t('button.name')}
                    </Button>
                </Container>
            </Form>}
        </Container>
    );
}

export default FormPage;
