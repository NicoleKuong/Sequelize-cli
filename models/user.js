"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    // can use to pass special configurations to our model definition
    {}
  );
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
