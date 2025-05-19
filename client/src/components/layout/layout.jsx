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
      link: "/",
    },
    {
      key: "2",
      label: "Employee",
      link: "/employee",
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

  // Set the selected key based on the current path for highlighting
  const currentPath = window.location.pathname;
  const selectedKey = items.find(
    (item) => `${item.link.toLowerCase()}` === currentPath
  )?.key;
  if (selectedKey) {
    items.forEach((item) => {
      item.selected = item.key === selectedKey;
    });
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[selectedKey]}
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
