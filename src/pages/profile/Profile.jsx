import React from "react";
import { Card, Avatar, Divider } from "antd";
import { UserOutlined, MailOutlined, HomeOutlined, InfoCircleOutlined, CalendarOutlined } from "@ant-design/icons";

const Profile = () => {
  // Static user data
  const user = {
    username: "Saqib",
    email: "sufyanpakpattan@gmail.com",
    address: "Pakpattan",
    bio: "Web developer & React enthusiast",
    joined: "2025-11-06",
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <Card
        title={<span style={{ color: "#1890ff" }}>👤 My Profile</span>}
        bordered={false}
        style={{ 
          textAlign: "center", 
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          borderRadius: "15px",
          background: "linear-gradient(to right, #e6f7ff, #ffffff)"
        }}
      >
        <Avatar 
          size={120} 
          icon={<UserOutlined />} 
          style={{ 
            marginBottom: 20, 
            border: "4px solid #1890ff",
            backgroundColor: "#bae7ff",
            color: "#0050b3"
          }} 
        />
        <Divider style={{ borderColor: "#1890ff" }} />
        
        <p style={{ fontSize: 16, color: "#096dd9" }}>
          <UserOutlined style={{ marginRight: 8 }} /> <strong>Username:</strong> {user.username}
        </p>
        <p style={{ fontSize: 16, color: "#096dd9" }}>
          <MailOutlined style={{ marginRight: 8 }} /> <strong>Email:</strong> {user.email}
        </p>
        <p style={{ fontSize: 16, color: "#096dd9" }}>
          <HomeOutlined style={{ marginRight: 8 }} /> <strong>Address:</strong> {user.address}
        </p>
        <p style={{ fontSize: 16, color: "#096dd9" }}>
          <InfoCircleOutlined style={{ marginRight: 8 }} /> <strong>Bio:</strong> {user.bio}
        </p>
        <p style={{ fontSize: 16, color: "#096dd9" }}>
          <CalendarOutlined style={{ marginRight: 8 }} /> <strong>Joined:</strong> {user.joined}
        </p>
      </Card>
    </div>
  );
};

export default Profile;
