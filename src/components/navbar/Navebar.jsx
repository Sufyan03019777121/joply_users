import React, { useState, useEffect } from "react";
import { Button, Drawer, Typography, Dropdown, Spin, Menu, message } from "antd";
import { MenuOutlined, UserOutlined, SettingOutlined, LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { Title } = Typography;

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Job View", path: "/jobs" },
    { name: "Register for Job", path: "/register-job" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchLogo = async () => {
    try {
      const res = await fetch("https://joply-backend.onrender.com/api/logo");
      const data = await res.json();
      if (data.url) setLogo("https://joply-backend.onrender.com" + data.url);
    } catch (err) {
      message.error("Failed to load logo 😕");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    message.success("Logged out successfully!");
    navigate("/signup");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="1" icon={<ProfileOutlined />}>
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined style={{ color: "red" }} />} danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar-container">
      <Link to="/home" className="navbar-logo">
        {loading ? (
          <Spin size="small" />
        ) : logo ? (
          <img src={logo} alt="logo" className="navbar-logo-img" />
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="default-logo" />
        )}
        <Title level={4} className="navbar-title"></Title>
      </Link>

      {!isMobile && (
        <div className="navbar-menu">
          {menuItems.map((item) =>
            item.name !== "Register for Job" ? (
              <Link key={item.path} to={item.path} className={`navbar-link ${location.pathname === item.path ? "active" : ""}`}>
                {item.name}
              </Link>
            ) : null
          )}
        </div>
      )}

      <div className="navbar-right">
        {!isMobile && (
          <Link to="/register-job">
            <Button type="primary" className="navbar-btn">Register for Job</Button>
          </Link>
        )}

        <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
          <UserOutlined className="navbar-user-icon" />
        </Dropdown>

        {isMobile && <MenuOutlined className="navbar-menu-icon" onClick={() => setOpen(true)} />}
      </div>

      <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
        <Title level={4}>Menu</Title>
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={`drawer-link ${location.pathname === item.path ? "active" : ""}`} onClick={() => setOpen(false)}>
            {item.name}
          </Link>
        ))}
      </Drawer>
    </div>
  );
};

export default Navbar;
