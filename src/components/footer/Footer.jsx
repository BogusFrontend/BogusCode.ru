import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">BogusCode.ru</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Главная</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Навыки</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Отзывы</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="/" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://t.me/BogusCode" className="footer__social-link" target="_blank">
                        <i className="uil uil-telegram"></i>
                    </a>

                    <a href="https://github.com/BogusFrontend" className="footer__social-link" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                        &copy;BogusCode. Все права защищены.
                </span>
            </div>
        </footer>
    )
}

export default Footer;