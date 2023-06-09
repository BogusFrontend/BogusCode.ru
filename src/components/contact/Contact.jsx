import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

import { motion } from "framer-motion";


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

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_le9bhyo', 'template_ccmy7ps', form.current, 'kn9dqiLU0bVFEIb4u')
            e.target.reset()
    };
    return (
        <motion.section initial="hidden" whileInView="visible" className="contact section" id="contact">
            <motion.h2 custom={0.2} variants={leftAnimation} className="section__title">Контакты</motion.h2>
            <motion.span custom={0.3} variants={rightAnimation} className="section__subtitle">Как связаться со мной</motion.span>

            <div className="contact__container container grid">
                <motion.div custom={0.4} variants={leftAnimation} className="contact__content">
                    <h3 className="contact__title">Как связаться?</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">bogus.frontend@gmail.com</span>

                            <a href="" className="contact__button">
                                Написать <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">@BogusCode</span>

                            <a href="" className="contact__button">
                                Написать <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">GitHub</h3>
                            <span className="contact__card-data">@BogusFrontend</span>

                            <a href="" className="contact__button">
                                Написать <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={0.4} variants={rightAnimation} className="contact__content">
                    <h3 className="contact__title">Опишите ваш проект</h3>

                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Имя</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Например: Илон Маск"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Например: username@email.ru"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Проект</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Например: Веб-приложение для приюта животных"></textarea>
                        </div>

                        <button className="button button--flex">Отправить сообщение</button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Contact;