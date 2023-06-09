import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_le9bhyo', 'template_ccmy7ps', form.current, 'kn9dqiLU0bVFEIb4u')
            e.target.reset()
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Контакты</h2>
            <span className="section__subtitle">Как связаться со мной</span>

            <div className="contact__container container grid">
                <div className="contact__content">
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
                </div>

                <div className="contact__content">
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
                </div>
            </div>
        </section>
    )
}

export default Contact;