const nodemailer = require('nodemailer');

// create transporter object with SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: '', // your email address
    pass: '' // your email password
  }
});

// setup email data with unicode symbols
const mailOptions = {
  from: '', // sender address
  to: '', // list of receivers
  subject: 'Test Email', // subject line
  text: 'Hello world!', // plain text body
  html: '<b>Hello world!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});