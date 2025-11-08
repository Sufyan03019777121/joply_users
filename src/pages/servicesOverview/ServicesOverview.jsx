import React from "react";
import { Row, Col, Typography, Image, Card } from "antd";
import "./ServicesOverview.css";

import Mask_group from "../../assets/images/Mask_group.png"
import Find_the_Service from "../../assets/images/Find_the_Service.png"

const { Title, Paragraph } = Typography;

const ServicesOverview = () => {
  const services = [
    {
      img: Find_the_Service,
      title: "Find the Service Providers You Need",
      desc: (
        <>
          Post your job for free to connect with service providers. <br />
          Providers interested in your job will send you a request.
        </>
      ),
    },
    {
      img: "https://via.placeholder.com/100",
      title: "Connect with Professionals",
      desc: (
        <>
          Post your job for free to connect with service providers. <br />
          Providers interested in your job will send you a request.
        </>
      ),
    },
    {
      img: "https://via.placeholder.com/100",
      title: "Hire with Confidence",
      desc: (
        <>
          Post your job for free to connect with service providers. <br />
          Providers interested in your job will send you a request.
        </>
      ),
    },
  ];

  return (
    <div className="services-overview">
      <Row
        gutter={[40, 40]}
        align="middle"
        justify="center"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Left Side */}
        <Col xs={24} md={14} className="left-section">
          <Paragraph className="highlight-text">Now You Can</Paragraph>
          <Title level={2} className="main-title">
            Find Perfect Workers with Confidence
          </Title>
          <Paragraph className="description">
            Finding the right worker isn't always easy. Joply is the dependable
            solution to hire a suitable worker for your needs.
          </Paragraph>

          {/* Services Rows */}
          {services.map((item, index) => (
            <div key={index} className="service-row">
              <div className="image-wrapper">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: "cover" }}
                  preview={false}
                />
              </div>
              <div className="service-text">
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Col>

        {/* Right Side */}
        <Col xs={24} md={10} className="right-section">
          <Card
            className="card-image"
            cover={
              <img
                src={Mask_group}
                alt="Workers"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          ></Card>

          <div className="services-badge">50+ Services</div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesOverview;
