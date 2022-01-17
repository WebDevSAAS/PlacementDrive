const nodemailer = require("nodemailer")

let transporter
// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error("Failed to create a testing account. " + err.message)
        return process.exit(1)
    }

    console.log("Credentials obtained, sending message...")

    // Create a SMTP transporter object
    transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass,
        },
    })
})
/*
// Message object
    let message = {
        from: "Sender Name <sender@example.com>",
        to: "Recipient <recipient@example.com>",
        subject: "Nodemailer is unicode friendly ✔",
        text: "Hello to myself!",
        html: "<p><b>Hello</b> to myself!</p>",
    }

*/

const email = message =>
    new Promise((resolve, reject) => {
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log("Error occurred. " + err.message)
                reject(new Error({ err, message: info, isSent: false }))
            }

            console.log("Message sent: %s", info.messageId)
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
            resolve({ isSent: true, message, info })
        })
    })

module.exports = email
