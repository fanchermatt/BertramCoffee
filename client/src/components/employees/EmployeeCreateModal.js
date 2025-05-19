import { Modal, Form, Input, InputNumber } from "antd";

const EmployeeCreateModal = ({ visible, createEmployee, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        createEmployee(values);
      })
      .catch((info) => {
        // Validation failed
      });
  };

  return (
    <Modal
      open={visible}
      title='Create Employee'
      okText='Create'
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form form={form} layout='vertical' name='employee_create_form'>
        <Form.Item
          name='name'
          label='Name'
          rules={[
            { required: true, message: "Please input the employee name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='balance'
          label='Balance'
          rules={[{ required: true, message: "Please input the balance!" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={-1000}
            max={1000}
            step={0.01}
          />
        </Form.Item>
        <Form.Item
          name='drinkName'
          label='Drink Name'
          rules={[{ required: true, message: "Please input the drink name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='drinkCost'
          label='Drink Cost'
          rules={[{ required: true, message: "Please input the drink cost!" }]}
        >
          <InputNumber style={{ width: "100%" }} min={0} max={99} step={0.01} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EmployeeCreateModal;
