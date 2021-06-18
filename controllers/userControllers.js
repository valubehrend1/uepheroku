const nodeMailer = require('nodemailer');
require('dotenv').config()

module.exports = {

    email: function(req, res, next) {
        const user = {
            nameForm: req.body.nameForm,
            email: req.body.email,
            phone: req.body.phone,
            file: req.body.file,
            option: req.body.option,
            asunto: req.body.asunto,
        };
        console.log('Data: ', req.body)

        const transporter = nodeMailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASS
            }
        })

        const fieldheader =
            `
                <html>
                <head>
                    <link rel="preconnect" href="https://fonts.gstatic.com">
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
                </head>
                <body>
                    <div style="background-color: #FFAC42; border-radius: 9px; text-align:center; margin: 20px">
                        <p style="font-size: 25px; font-family: 'Raleway'; text-align:center"><b>Nuevo mensaje</b></p>
                    </div>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Nombre: </b>${user.nameForm}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Email: </b><a>${user.email}</a></p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Teléfono: </b>${user.phone}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Motivo de contacto: </b>${user.option}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Consulta:</b></p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"> - ${user.asunto} - </p>
                </body>
                </html>
                `
        var message = {
            from: 'info@uep-es.com',
            to: 'info@uep-es.com',
            replyTo: user.email,
            subject: user.option,
            html: fieldheader,
            attachments: req.file ? [{
                filename: req.file.originalname,
                content: Buffer.alloc(req.file.size, req.file.buffer, req.file.enconding)
            }] : null
        };

        transporter.sendMail(message)
        res.json(true);
    },
}