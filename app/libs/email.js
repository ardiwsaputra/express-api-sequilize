const nodemailer = require("nodemailer");
const config = require("../config/email.config");

async function sendEmail({ from, to, subject, html }) {
  const transporter = nodemailer.createTransport(config);
  await transporter.sendMail({ from, to, subject, html });
}

sendOtp = (to, otpCode) => {
  sendEmail({
    from: '"starter-APP" <noreply@monipos.id>',
    to: to,
    subject: "Kode OTP Anda untuk starter-APP",
    text: "",
    html: `<b>Halo, </b><br/>Berikut adalah Kode OTP untuk Konfirmasi Email anda <b>${otpCode}</b>.<br/>Jika Anda tidak meminta Kode OTP ini, Anda dapat mengabaikan email ini. Mohon untuk tidak memberikan Kode OTP kepada siapapun. Terima Kasih.`,
  });
};

const emailLib = {
  sendEmail: sendEmail,
  sendOtp: sendOtp,
};
module.exports = emailLib;
