import { Layout } from "antd";
import labs from "../../images/labs.svg";
import "./index.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <img
            src={labs}
            alt='Bertram Coffee Labs'
            style={{ height: "2rem", margin: "1rem" }}
          />
        </Header>
        <Content style={{ margin: "1rem" }}>
          <div style={{ padding: "1.5rem", background: "#fff" }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {new Date().getFullYear()} Bertram Labs Coffee Experiment
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
