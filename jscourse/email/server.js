const nodemailer = require('nodemailer'); 

  
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'notepadservice@gmail.com', 
        pass: 'klusdp365'
    } 

  
}); 
  
let mailDetails = { 
    from: 'notepadservice@gmail.com', 
    to: 'giridharavenkat123@gmail.com', 
    subject: 'Account accessed', 
    text: 'created task'
}; 
  
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'+err); 
    } else { 
        console.log('Email sent successfully'); 
    } 
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";