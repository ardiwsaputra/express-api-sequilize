module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("Roles", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Role;
};
