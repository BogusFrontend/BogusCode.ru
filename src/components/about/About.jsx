import Info from './Info';
import AboutImg from '../../assets/profile.jpg';
import CV from '../../assets/Bogus-Cv.pdf';
import './about.css';

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



const About  = () => {
    return  (
        <motion.section initial="hidden" whileInView="visible" className="about section" id="about">
            <motion.h2 custom={0.2} variants={leftAnimation} className="section__title">Обо мне</motion.h2>
            <motion.span custom={0.3} variants={leftAnimation} className="section__subtitle">Краткая информация</motion.span>

            <div className="about__container container grid">
                <motion.img custom={0.4} variants={leftAnimation} src={AboutImg} alt="Даниил Богус" className="about__img"/>

                <motion.div custom={0.3} variants={rightAnimation} className="about__data">
                    <Info />

                    <motion.p custom={0.4} variants={rightAnimation} className="about__description">Скачайте мое резюме, чтобы узнать о моих навыках и опыте работы. Оно предоставит полное представление о моих компетенциях в разработке. Оцените мою способность решать сложные задачи и достигать поставленных целей. Не упустите возможность ознакомиться с моим профессиональным путем.</motion.p>

                    <motion.a custom={0.5} variants={rightAnimation} download="" href={CV} className="button button--flex">
                        Скачать резюме <i className="uil uil-file-download-alt file__icon"></i>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About;