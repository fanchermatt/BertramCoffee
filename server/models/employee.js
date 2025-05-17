"use strict";
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employee",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favoriteDrink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favoriteDrinkCost: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      debtOwed: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { paranoid: true, freezeTableName: true }
  );
  return employee;
};
