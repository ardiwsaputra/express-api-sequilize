module.exports = {
  host: "smtp.example.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "noreply@example.com", // generated ethereal user
    pass: "example", // generated ethereal password
  },
};
