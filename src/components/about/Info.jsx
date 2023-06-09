
const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Опыт</h3>
                <span className="about__subtitle">2 года работы</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Выполнено</h3>
                <span className="about__subtitle">15+ проектов</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Помощь</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info;