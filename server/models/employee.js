"use strict";
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employees",
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
      balance: {
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

  employee.associate = function (models) {
    //for now we will only have one relationship, in the future we may have more
    employee.hasOne(models.employee_drinks, {
      as: "employee_drinks",
      foreignKey: "employeeId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return employee;
};
