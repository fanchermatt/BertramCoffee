import React, { useState } from "react";
import { Modal, Tabs, Form, Input, InputNumber, Button } from "antd";

const { TabPane } = Tabs;

const EmployeeEditModal = ({
  visible,
  onCancel,
  saveEmployee,
  saveDrink,
  employee = {},
}) => {
  const [activeTab, setActiveTab] = useState("1");
  const [employeeForm] = Form.useForm();
  const [drinkForm] = Form.useForm();

  const handleEmployeeSave = () => {
    employeeForm
      .validateFields()
      .then((values) => {
        saveEmployee(employee.id, { ...values });
      })
      .catch(() => {});
  };

  const handleDrinkSave = () => {
    drinkForm
      .validateFields()
      .then((values) => {
        saveDrink(employee.employee_drinks.drinks.id, { ...values });
      })
      .catch(() => {});
  };

  return (
    <Modal
      open={visible}
      title='Edit Employee'
      onCancel={onCancel}
      footer={null}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab='Employee Info' key='1'>
          <Form
            form={employeeForm}
            layout='vertical'
            initialValues={employee}
            onFinish={handleEmployeeSave}
          >
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Balance'
              name='balance'
              type='number'
              //validate it does not have more than 2 decimal places
              //validate it is a number
              rules={[{ required: true, message: "Please enter the balance" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={-1000}
                max={1000}
                step={0.01}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Save Employee
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab='Drink Info' key='2'>
          <Form
            form={drinkForm}
            layout='vertical'
            initialValues={{
              name: employee.employee_drinks.drinks.name,
              cost: employee.employee_drinks.drinks.cost,
            }}
            onFinish={handleDrinkSave}
          >
            <Form.Item
              label='Drink Name'
              name='name'
              rules={[{ required: true, message: "Please enter the drink" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Cost'
              name='cost'
              rules={[
                { required: true, message: "Please enter the drink cost" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                max={99}
                step={0.01}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Save Drink
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default EmployeeEditModal;
