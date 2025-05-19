import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Welcome to Bertram Labs Coffee Tracker</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>
          Employees and their favored drink's have been seeded into the database
          during startup. If you would like to view or adjust the data at any
          point, you can utilize the left navigation bar or the button below.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "2rem",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Button type='primary' onClick={() => navigate("/employee")}>
          Employee Management
        </Button>

        <Button type='primary' href='#'>
          Who Pays for Drinks today?
        </Button>

        <Button type='primary' href='#'>
          Advance to Next Day
        </Button>
      </div>
    </>
  );
};

export default Home;
