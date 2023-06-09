import './services.css';
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

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="services section" id="services">
            <motion.h2 custom={0.2} variants={rightAnimation} className="section__title">Услуги</motion.h2>
            <motion.span custom={0.3} variants={rightAnimation} className="section__subtitle">Что я могу предложить</motion.span>

            <div className="services__container container grid">
                <motion.div custom={0.3} variants={leftAnimation} className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Веб <br /> Дизайн</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Посмотреть больше
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Веб Дизайн</h3>
                            <p className="services__modal-description">Привлекательный и интуитивно понятный веб-дизайн, который создает незабываемые пользовательские впечатления и повышает эффективность взаимодействия с веб-сайтом..</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Эффективный пользовательский интерфейс.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Привлекательные цветовые схемы.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Интуитивная навигация.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Оптимизированная загрузка страниц.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Респонсивный дизайн для мобильных устройств.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={0.4} variants={leftAnimation} className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Вёрстка <br /> макетов</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Посмотреть больше
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Вёрстка макетов</h3>
                            <p className="services__modal-description">Гибкая и адаптивная вёрстка, обеспечивающая качественное отображение веб-сайта на различных устройствах и браузерах, для улучшенного пользовательского опыта и доступности.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Семантическая HTML-разметка.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Гибкая сетка и адаптивные стили.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Кросс-браузерная совместимость.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Оптимизированные изображения.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Валидная и доступная верстка.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={0.5} variants={leftAnimation} className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Цифровой <br /> маркетинг</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Посмотреть больше
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Цифровой маркетинг</h3>
                            <p className="services__modal-description">Эффективный цифровой маркетинг, использующий разнообразные онлайн-стратегии и инструменты, для привлечения целевой аудитории, увеличения видимости бренда и достижения бизнес-целей.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Ключевые слова и метатеги.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">SEO-оптимизация.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Улучшение пользовательского опыта.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Продвижение в социальных сетях.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Рекламные кампании и аналитика.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Services;