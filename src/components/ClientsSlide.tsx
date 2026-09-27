import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./css/clients-slide.css";

const ClientsSlide: React.FC = () => {
    const clientLogos = [
        {
            src: "/images/logo/marketers-logo.png",
            alt: "Marketers Logo",
            className: "marketers-logo"
        },
        {
            src: "/images/logo/jojo.png",
            alt: "Jojo Logo",
            className: ""
        },
        {
            src: "/images/logo/commerce-season.jpeg",
            alt: "Commerce Season Logo",
            className: ""
        },
        {
            src: "/images/logo/al-haider.png",
            alt: "Al-Haider Logo",
            className: "al-haider-logo"
        }
    ];

    return (
        <div className="clients-slide">
            <h3 className="subheading">
                <span>CLIENTS</span>
            </h3>
            
            <div className="slider-client">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        // Mobile (0-767px): 1 logo
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // Tablet (768-991px): 3 logos
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        // Desktop (992px+): 4 logos
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    className="clients-swiper"
                >
                    {clientLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="client-logo">
                                <a href="#">
                                    <img
                                        className={logo.className}
                                        style={{
                                            height: "150px",
                                            width: "150px",
                                        }}
                                        decoding="async"
                                        src={logo.src}
                                        alt={logo.alt}
                                    />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientsSlide;
