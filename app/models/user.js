module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};
