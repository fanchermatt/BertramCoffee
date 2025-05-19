"use strict";
module.exports = (sequelize, DataTypes) => {
  const drink = sequelize.define(
    "drinks",
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
      cost: {
        type: DataTypes.DECIMAL(4, 2),
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

  drink.associate = function (models) {
    drink.hasOne(models.employee_drinks, {
      as: "employee_drinks",
      foreignKey: "drinkId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return drink;
};
