import nodeMailer from "nodemailer";

export const sendEmail = async ({email,subject,message}) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service : process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });
  const options = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject,
    text: message
  };
  await transporter.sendMail(options);
};