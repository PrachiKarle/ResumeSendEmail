const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "prachikarle03@gmail.com",
    pass: "ches cnxm rfho kijh",
  },
});

const sendEmail = async (email, job_title, hr_name, c_name, skill) => {
  const info = await transporter.sendMail({
    from: "prachikarle03@gmail.com",
    to: email,

    subject: `Application for ${job_title} `,
    text: "Hello world?",
    html: `
     <b style="color:#000000;font-weight:bold">Dear ${hr_name},</b>
      <p style="color:#000000;font-weight:normal">I hope this email finds you well.</p>
      <p style="color:#000000;font-weight:normal">I am writing to express my interest in the <strong>${job_title}</strong> position at <strong>${c_name}</strong>. With my background in <strong>${skill}</strong>, I am eager to contribute my skills and expertise to your organization.</p>
      <p style="color:#000000;font-weight:normal">I Attached my resume for your review. </p>
      <p style="color:#000000;font-weight:normal">Looking forward to your response. Thank you.</p>
      <p style="color:#000000;font-weight:normal">Best regards, <br> <strong>Prachi Karle</strong></p>
    
    `,
    attachments: [
      {
        filename: "Resume.pdf",
        path: "./public/images/Resume.pdf", // Replace with the correct file path
        contentType: "application/pdf",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};

// sendEmail(
//   "prachikkarle@gmail.com",
//   "ABC",
//   "XYZ",
//   "cname",
//   "Full stack Development"
// ).catch(console.error);

module.exports = sendEmail;
