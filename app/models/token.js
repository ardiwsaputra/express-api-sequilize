const { addMinutesToDate } = require("../libs/date");

module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define("Tokens", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    otpCode: {
      type: Sequelize.STRING,
      required: true,
    },
    channel: {
      type: Sequelize.STRING,
      required: true,
    },
    expiredAt: {
      type: Sequelize.DATE,
      defaultValue: addMinutesToDate(new Date(), 60),
    },
  });

  return Token;
};
