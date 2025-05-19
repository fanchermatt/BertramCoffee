"use strict";

module.exports = (sequelize, DataTypes) => {
  const employee_drink = sequelize.define(
    "employee_drinks",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      drinkId: {
        type: DataTypes.UUID,
        references: {
          model: "Drinks",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      employeeId: {
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

  employee_drink.associate = function (models) {
    employee_drink.belongsTo(models.drinks, {
      as: "drinks",
      foreignKey: "drinkId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    employee_drink.belongsTo(models.employees, {
      as: "employees",
      foreignKey: "employeeId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return employee_drink;
};
