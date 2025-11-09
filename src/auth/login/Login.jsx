import React, { useState } from "react";
import { Input, Button, Divider, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 👈 for navigation after login

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.emailOrUsername || !form.password) {
      return message.warning("Please enter all fields!");
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://joply-backend.onrender.com/api/auth/login",
        form
      );

      message.success("Login successful!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Navigate to Home page
      navigate("/home");
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.msg || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login To Your Account</h2>
      <Divider className="login-divider" />

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

      <div className="or-divider">
        <div className="or-divider-line"></div>
        <span className="or-divider-text">Or login with Username / E-Mail</span>
        <div className="or-divider-line"></div>
      </div>

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

      <Button
        type="primary"
        loading={loading}
        onClick={handleLogin}
        className="login-btn"
      >
        LOGIN
      </Button>

      <div className="signup-redirect">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
