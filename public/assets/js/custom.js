import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel'; // React Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick"; // React Slick Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Function to handle the menu toggle
export const useMenuToggle = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return {
        menuActive,
        toggleMenu
    };
};

// Function for the countdown timer
export const useCountdown = (endDate) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const getTimeRemaining = (endtime) => {
            const t = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor((t / 1000) % 60);
            const minutes = Math.floor((t / 1000 / 60) % 60);
            const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            return { total: t, days, hours, minutes, seconds };
        };

        const updateClock = () => {
            const time = getTimeRemaining(endDate);
            setTimeRemaining(time);
        };

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [endDate]);

    return timeRemaining;
};

// React component for Owl Carousel
export const CustomCarousel = () => (
    <OwlCarousel className="owl-theme" loop margin={30} nav autoplay autoplayTimeout={5000}>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
    </OwlCarousel>
);

// React component for Slick Slider
export const CustomSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'fade',
        draggable: false,
        prevArrow: <button className="PrevArrow"></button>,
        nextArrow: <button className="NextArrow"></button>
    };

    return (
        <Slider {...settings}>
            <div><h3>Slide 1</h3></div>
            <div><h3>Slide 2</h3></div>
            <div><h3>Slide 3</h3></div>
        </Slider>
    );
};

// React component for the Countdown Timer
export const CountdownTimer = ({ endDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(endDate);

    return (
        <div className="countdown">
            <div className="days"><span className="label">Days:</span> <span className="value">{days}</span></div>
            <div className="hours"><span className="label">Hours:</span> <span className="value">{hours}</span></div>
            <div className="minutes"><span className="label">Minutes:</span> <span className="value">{minutes}</span></div>
            <div className="seconds"><span className="label">Seconds:</span> <span className="value">{seconds}</span></div>
        </div>
    );
};

// React component for Features Post hover effect
export const FeaturesPost = () => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div 
            className="features-post" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={`content-hide ${isHovered ? 'active' : ''}`}>
                {/* Content to show/hide */}
            </div>
        </div>
    );
};
