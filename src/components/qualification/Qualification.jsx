import './qualification.css';
import {useState} from "react";

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

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <motion.section initial="hidden" whileInView="visible" className="qualification section">
            <motion.h2 custom={0.2} variants={leftAnimation} className="section__title">Квалификация</motion.h2>
            <motion.span custom={0.3} variants={leftAnimation} className="section__subtitle">Моё персональное путешествие</motion.span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <motion.div custom={0.3} variants={leftAnimation}
                        className={toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Образование
                    </motion.div>

                    <motion.div custom={0.3} variants={rightAnimation} className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                         onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Опыт работы
                    </motion.div>
                </div>

                <div className="qualification__sections">
                    <motion.div custom={0.3} variants={leftAnimation} className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Фроненд-разработка</h3>
                                <span className="qualification__subtitle">ReactJS, Redux, NodeJS</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - по настоящее время
                                </div>
                            </div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Вёрстка</h3>
                                <span className="qualification__subtitle">HTML, CSS, JS</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Веб-дизайн</h3>
                                <span className="qualification__subtitle">Figma, AdobeXD, Photoshop</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Программирование</h3>
                                <span className="qualification__subtitle">Алгоритмы и структуры данных</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div custom={0.3} variants={leftAnimation} className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}
                         onClick={() => toggleTab(2)}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Фронтенд-разработчик</h3>
                                <span className="qualification__subtitle">Orange DM</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - по настоящее время
                                </div>
                            </div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Freelance</h3>
                                <span className="qualification__subtitle">Безработный</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Freelance</h3>
                                <span className="qualification__subtitle">Безработный</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="span qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Freelance</h3>
                                <span className="qualification__subtitle">Безработный</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2020
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Qualification;