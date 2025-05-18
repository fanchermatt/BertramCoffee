import { Layout, Menu } from "antd";
import labs from "../../images/labs.svg";
import "./index.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;

  const items = [
    {
      key: "1",
      label: "Home",
    },
    {
      key: "2",
      label: "Employee",
    },
  ];

  let navigate = useNavigate();

  const handleMenuClick = (e) => {
    const selectedKey = e.key;
    if (selectedKey === "1") {
      navigate("/");
    } else if (selectedKey === "2") {
      navigate("/employee");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ marginTop: ".5rem" }}
          onClick={handleMenuClick}
        />
      </Sider>
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
            {/* This is where the main content will be rendered */}
            <h1>Welcome to Bertram Coffee Labs</h1>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Bertram Coffee
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
