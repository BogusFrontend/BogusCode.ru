import './qualification.css';
import {useState} from "react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Квалификация</h2>
            <span className="section__subtitle">Моё персональное путешествие</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Образование
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                         onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Опыт
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Krasnodar - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
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
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Krasnodar - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Dev</h3>
                                <span className="qualification__subtitle">Krasnodar - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
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
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Krasnodar - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}
                         onClick={() => toggleTab(2)}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft Corp.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
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
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Saint-Petersburg</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Designer UI</h3>
                                <span className="qualification__subtitle">Krasnodar - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
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
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma - Moscow</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;