import React, { useState } from "react";
import { Input, Button, Divider, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import axios from "axios";
import Home from "../../pages/home/Home";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.emailOrUsername || !form.password) {
      return message.warning("Please enter all fields!");
    }

    setLoading(true);
    try {
      const res = await axios.post("https://joply-backend.onrender.com/api/auth/login", form);
      message.success("Login successful!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/app/home";
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.msg || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Home />

      <div className="login-container">
        <h2 className="login-title">Login To Your Account</h2>
        <Divider className="login-divider" />

        {/* Google Login Button */}
        <Button className="google-login-btn">
          <span className="google-g">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </span>
          Continue with Google
        </Button>


        {/* OR Divider */}
        <div className="or-divider">
          <div className="or-divider-line"></div>
          <span className="or-divider-text">Or login with Username / E-Mail</span>
          <div className="or-divider-line"></div>
        </div>

        {/* Input Fields */}
        <Input
          placeholder="User Name / Email"
          name="emailOrUsername"
          value={form.emailOrUsername}
          onChange={handleChange}
          className="login-input"
        />
        <Input.Password
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
        />

        {/* Login Button */}
        <Button
          type="primary"
          loading={loading}
          onClick={handleLogin}
          className="login-btn"
        >
          LOGIN
        </Button>

        {/* Signup Redirect */}
        <div className="signup-redirect">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
