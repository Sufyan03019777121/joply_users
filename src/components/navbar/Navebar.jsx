import React, { useState, useEffect } from "react";
import { Button, Drawer, Typography, Dropdown, Spin, Menu, message } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { Title } = Typography;

  // Menu items with /app prefix
  const menuItems = [
    { name: "Home", path: "/app/home" },
    { name: "About Us", path: "/app/about" },
    { name: "Our Services", path: "/app/services" },
    { name: "Contact Us", path: "/app/contact" },
    { name: "Job View", path: "/app/jobs" },
    { name: "Register for Job", path: "/app/register-job" },
  ];

  // Handle mobile resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch logo
  const fetchLogo = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/logo");
      const data = await res.json();
      if (data.url) setLogo("http://localhost:5000" + data.url);
    } catch (err) {
      message.error("Failed to load logo 😕");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    message.success("Logged out successfully!");
    navigate("/");
  };

  // Profile Dropdown Menu
  const profileMenu = (
    <Menu>
      <Menu.Item key="1" icon={<ProfileOutlined />}>
        <Link to="/app/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link to="/app/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="3"
        icon={<LogoutOutlined style={{ color: "red" }} />}
        danger
        onClick={handleLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar-container">
      {/* Logo */}
      <Link to="/app/home" className="navbar-logo">
        {loading ? (
          <Spin size="small" />
        ) : logo ? (
          <img
            src={logo}
            alt="logo"
            className="navbar-logo-img"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="default-logo"
            className="navbar-logo-default"
          />
        )}
        <Title level={4} className="navbar-title"></Title>
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="navbar-menu">
          {menuItems.map((item) =>
            item.name !== "Register for Job" ? (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ) : null
          )}
        </div>
      )}

      {/* Right Side */}
      <div className="navbar-right">
        {!isMobile && (
          <Link to="/app/register-job">
            <Button type="primary" className="navbar-btn">
              Register for Job
            </Button>
          </Link>
        )}

        {/* Profile Dropdown */}
        <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
          <UserOutlined className="navbar-user-icon" />
        </Dropdown>

        {/* Mobile Menu Icon */}
        {isMobile && <MenuOutlined className="navbar-menu-icon" onClick={() => setOpen(true)} />}
      </div>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
        <Title level={4}>Menu</Title>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`drawer-link ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </Drawer>
    </div>
  );
};

export default Navbar;
