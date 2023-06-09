import './testimonials.css';
import {Data} from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { motion } from "framer-motion"


const leftAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom},
    }),
}
const rightAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom},
    }),
}

const Testimonials = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" className="testimonials container section">
            <motion.h2 custom={0.2} variants={leftAnimation} className="section__title">Что говорят</motion.h2>
            <motion.span custom={0.3} variants={rightAnimation} className="section__subtitle">Отзывы</motion.span>

            <motion.div custom={0.3} variants={rightAnimation}>
                <Swiper className="testimonials__container"
                        loop={true}
                        grabCursor={true}
                        spaceBetween={24}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 48,
                            },
                        }}
                        modules={[Pagination]}
                >
                    {Data.map(({id, image, title, description}) => {
                        return(
                            <SwiperSlide className="testimonials__card" key={id}>
                                <img src={image} alt="" className="testimonials__img"/>

                                <h3 className="testimonials__name">{title}</h3>
                                <p className="testimonials__description">{description}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </motion.div>
        </motion.div>
    )
}

export default Testimonials;