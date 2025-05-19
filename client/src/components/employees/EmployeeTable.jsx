import { Table, Button, Space, Popconfirm } from "antd";

const EmployeeTable = ({ data, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Drink",
      dataIndex: (row) => row.employee_drinks?.drinks?.name,

      key: "drink",
      render: (text, row) => {
        return <span>{row.employee_drinks?.drinks?.name}</span>;
      },
    },
    {
      title: "Drink Cost",
      dataIndex: (row) => row.employee_drinks?.drinks?.cost,
      key: "drinkCost",
      render: (text, row) => {
        return <span>${row.employee_drinks?.drinks?.cost}</span>;
      },
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (text, row) => {
        const color =
          row.balance > 0 ? "green" : row.balance < 0 ? "red" : "grey";
        return <span style={{ color: color }}>${row.balance}</span>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type='link' onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title='Are you sure you want to delete this employee?'
            onConfirm={() => onDelete(record)}
            okText='Yes'
            cancelText='No'
          >
            <Button type='link' danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table rowKey='id' columns={columns} dataSource={data} pagination={false} />
  );
};

export default EmployeeTable;
