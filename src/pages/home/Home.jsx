import React from "react";
import { Carousel } from "antd";
import sliderBackground from "../../assets/images/Slider.png";
import sliderGirlImage1 from "../../assets/images/sliderGirlImage1.png";
import sliderGirlImage2 from "../../assets/images/sliderGirlImage2.png";
import sliderGirlImage3 from "../../assets/images/sliderGirlImage3.png";
import "./Home.css";
import SearchBar from "../searchBar/SearchBar"
import ServicesOverview from "../servicesOverview/ServicesOverview";

const Home = () => {
    const slides = [
        { bg: sliderBackground, girl: sliderGirlImage1 },
        { bg: sliderBackground, girl: sliderGirlImage2 },
        { bg: sliderBackground, girl: sliderGirlImage3 },
    ];

    return (
        <>
            <Carousel
                autoplay
                autoplaySpeed={4000}
                effect="fade"
                pauseOnHover={false}
                className="home-carousel"
                dots={false}  
            >

                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="home-slide"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            {/* Left Text Section */}
                            <div className="home-text">
                                <p className="home-subtitle">Welcome To Joplay</p>
                                <h1 className="home-title">
                                    Experience an extraordinary life with our exceptional services.
                                </h1>
                                <p className="home-desc">
                                    Premium maintenance and repair services for corporate and
                                    residential clients.
                                </p>
                            </div>

                            {/* Right Side Girl Image */}
                            <div className="home-image-wrapper">
                                <img src={slide.girl} alt="girl" className="home-image" />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <SearchBar/>
            <ServicesOverview/>
        </>
    );
};

export default Home;
