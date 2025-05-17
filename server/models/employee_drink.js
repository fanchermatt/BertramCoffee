"use strict";

module.exports = (sequelize, DataTypes) => {
  const employee_drinks = sequelize.define(
    "employee_drinks",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      drink_id: {
        type: DataTypes.UUID,
        references: {
          model: "Drinks",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      employee_id: {
        type: DataTypes.UUID,
        references: {
          model: "Employees",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
  return employee_drinks;
};
