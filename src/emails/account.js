const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = ''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Smajsnamz@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Smajsnamz@gmail.com',
        subject: 'Cancelation email',
        text: 'Sorry to see you go, was there anything we could have done to keep you?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}