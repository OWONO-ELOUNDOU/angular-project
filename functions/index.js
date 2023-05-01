const functions = require("firebase-functions");
const emailJs = require('emailjs/email');
const pdfDocument = require('pdfkit');
const { onCall } = require("firebase-functions/v1/https");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendEmailfn = functions.ref('/sendmail/{email}').OneWrite(event => {
    var doc = new pdfDocument();
    var email = event.data.val().email;

    doc.text('This email was send as soon as the user clicked on the button');
    doc.end();

    var server = emailJs.server.connect({
        user: '',
        password: '',
        host: 'smtp.gmail.com',
        ssl: true
    });

    server.send({
        text: 'this email was send automatically when the user click in the button',
        from: 'user@gmail.com',
        to: email,
        subject: 'Prestation sollicitée',
        attachment: [
            { data: 'somerandomdata', type: 'application/pdf', stream: doc, name: 'Formulaire de demande de service.pdf' }
        ]
    }, (err, message) => {
        if(err) console.log(err)
    })
})