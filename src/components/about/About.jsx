import Info from './Info';
import AboutImg from '../../assets/profile.jpg';
import CV from '../../assets/Bogus-Cv.pdf';
import './about.css';


const About  = () => {
    return  (
        <section  className="about section" id="about">
            <h2 className="section__title">Обо мне</h2>
            <span className="section__subtitle">Краткая информация</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="Даниил Богус" className="about__img"/>

                <div className="about__data">
                    <Info />

                    <p className="about__description">Скачайте мое резюме, чтобы узнать о моих навыках и опыте работы. Оно предоставит полное представление о моих компетенциях в разработке. Оцените мою способность решать сложные задачи и достигать поставленных целей. Не упустите возможность ознакомиться с моим профессиональным путем.</p>

                    <a download="" href={CV} className="button button--flex">
                        Скачать резюме <i className="uil uil-file-download-alt file__icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;