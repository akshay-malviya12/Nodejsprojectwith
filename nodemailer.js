const nodeEmailer = require("nodemailer");

const sendEmailForVerify = async (email, code) => {
  const transporter = nodeEmailer.createTransport({
    host: "smtp.ethereal11.email", //your host name
    port: 587, //
    secure: false,
    auth: {
      user: "hipolito55@ethereal.email",
      pass: "9WV6VgZpBQ3DkjkE7S",
    },
  });
  const mailOptions = {
    from: "usersurname1@yopmail.com",
    to: email,
    subject: "Email Verification",
    text: `Your verification code is: ${code}`,
  };
  try {
    const info = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("message", info.messageId);
      }
    });

    console.log("Email sent: %s", info.messageId);
  } catch (err) {
    console.log("Error sending email", err);
  }
 

module.exports = { sendEmailForVerify };
