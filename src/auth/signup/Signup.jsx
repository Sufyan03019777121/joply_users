import React, { useState, useRef, useEffect } from "react";
import { Carousel, Button, Input, Divider, message } from "antd";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import sliderBackground from "../../assets/images/Slider.png";
import sliderGirlImage1 from "../../assets/images/sliderGirlImage1.png";
import sliderGirlImage2 from "../../assets/images/sliderGirlImage2.png";
import sliderGirlImage3 from "../../assets/images/sliderGirlImage3.png";
import SearchBar from "../../pages/searchBar/SearchBar";

import "../../pages/home/home.css";
import "./signup.css"; 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    bio: "",
  });

  const signupRef = useRef(null);

  const handleScrollToSignup = () => {
    if (signupRef.current) {
      const offsetTop = signupRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    const { username, email, password, address, bio } = formData;
    if (!username || !email || !password || !address || !bio) {
      message.warning("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      message.success("Signup successful! You can now login.");
      setFormData({ username: "", email: "", password: "", address: "", bio: "" });
    } catch (err) {
      message.error(err.response?.data?.message || "Signup failed!");
    }
  };

  const slides = [
    { bg: sliderBackground, girl: sliderGirlImage1 },
    { bg: sliderBackground, girl: sliderGirlImage2 },
    { bg: sliderBackground, girl: sliderGirlImage3 },
  ];

  return (
    <>
      <ScrollToTop />

      {/* Carousel */}
      <Carousel autoplay autoplaySpeed={4000} effect="fade" pauseOnHover={false} className="home-carousel" dots={false}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="home-slide" style={{ backgroundImage: `url(${slide.bg})` }}>
              
              <div className="top-buttons">
                <Link to="/login">
                  <Button type="primary" size="large" className="login-btn">Login</Button>
                </Link>
                <Button size="large" className="register-btn" onClick={handleScrollToSignup}>Register</Button>
              </div>

              <div className="home-text">
                <p className="home-subtitle">Welcome To Joplay</p>
                <h1 className="home-title">Experience an extraordinary life with our exceptional services.</h1>
                <p className="home-desc">Premium maintenance and repair services for corporate and residential clients.</p>
              </div>

              <div className="home-image-wrapper">
                <img src={slide.girl} alt="girl" className="home-image" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <SearchBar />

      {/* Signup Section */}
      <div ref={signupRef} className="signup-title-container">
        <h2 className="signup-title">
          <hr className="HR_CREATE_AN_ACCOUNT" /> CREATE AN ACCOUNT <hr className="HR_CREATE_AN_ACCOUNT" />
        </h2>
      </div>


      <div className="signup-container">
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
      
        <Divider className="signup-divider" />
        <Input placeholder="User Name" name="username" value={formData.username} onChange={handleChange} className="signup-input" />
        <Input placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="signup-input" />
        <Input.Password placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="signup-input" />
        <Input placeholder="Address" name="address" value={formData.address} onChange={handleChange} className="signup-input" />
        <Input.TextArea placeholder="Bio" name="bio" value={formData.bio} onChange={handleChange} className="signup-textarea" />
        <Button type="primary" onClick={handleSignup} className="signup-button">SIGN UP</Button>
        <p className="signup-login-text">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </>
  );
};

export default Signup;
