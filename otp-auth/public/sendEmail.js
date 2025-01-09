// const nodemailer = require('nodemailer');

// // Create transporter
// const transporter = nodemailer.createTransport(
//     {
//         secure:true,
//         host:'smtp.gmail.com',
//         port:465,
//         auth:{
//             user:'sachinidhate701@gmail.com',
//             pass:'aytt ihic bsrc hixz'
//         }
//     }
// );

// function sendMail(to,sub,msg){
//     transporter.sendMail({
//         to:to,
//         subject:sub,
//     })
// }

// sendMail("sachinidhate701@gmail.com","This is subject","Hii I am Aditya")


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (like HTML)

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'sachinidhate701@gmail.com',
        pass: 'aytt ihic bsrc hixz' // Replace with your app password
    }
});

// Email sending endpoint
app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;

    transporter.sendMail({ to, subject, text: message }, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Email sent successfully!', info });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });
