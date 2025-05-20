import { Button, message } from "antd";
import { fetchPayer, advanceDay } from "./homeApi"; // Adjust the import path as necessary
import { useState, useEffect } from "react";
import { Spin } from "antd";
import Employee from "../employees/employees";

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [payer, setPayer] = useState(null);
  const [employees, setEmployees] = useState([]);

  const handleFetchPayer = async () => {
    try {
      setLoading(true);
      const data = await fetchPayer();
      if (data?.message) {
        setPayer(data.message);
      }
    } catch (error) {
      messageApi.error("Failed to fetch payer");
      setPayer("An error occurred while fetching the payer");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvanceDay = async () => {
    try {
      setLoading(true);
      const data = await advanceDay();
      if (data?.message) {
        messageApi.success(data.message);
      }
      //update the employees list
      setEmployees(data.employees);
      //update the payer
      setPayer(data.payer);
    } catch (error) {
      messageApi.error("Failed to advance day");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!payer) {
      handleFetchPayer();
    }
  });
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Welcome to Bertram Labs Coffee Tracker</h1>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <p>
          Example Employees and their favored drink's have been seeded into the
          database during startup. Feel free to add, update, or delete
          employees. To simulate a coffee trip and move on to the next day,
          click the button below. The system will recalculate balances and
          present the new payer for the day.
        </p>
      </div>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ textAlign: "center", maxWidth: "20rem", height: "15rem" }}
        >
          <h2>Who is paying today?</h2>

          <h3>{payer}</h3>
          <Button type='primary' onClick={handleAdvanceDay} disabled={loading}>
            {loading && <Spin />}
            Advance to Next Day
          </Button>
        </div>
      </div>

      <div>
        <Employee employees={employees} setEmployees={setEmployees} />
      </div>
    </>
  );
};

export default Home;
