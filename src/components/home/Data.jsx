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





const Data = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="home__data">
            <motion.h1 custom={0.1} variants={leftAnimation} className="home__title">Даниил Богус</motion.h1>
            <motion.h3 custom={0.1} variants={leftAnimation} className="home__subtitle">SOFTWARE ENGINEER</motion.h3>
            <motion.p custom={0.3} variants={leftAnimation} className="home__description">Мне 21 год, живу в г. Краснодар. <br/> Люблю решать проблемы с кодом и автоматизировать рутинные задачи.</motion.p>

            <motion.a custom={0.4} variants={leftAnimation} href="#contact" className="button button--flex">
                Напиши мне
                <i className="uil uil-message home__icon"></i></motion.a>
        </motion.div>
    );
};

export default Data;