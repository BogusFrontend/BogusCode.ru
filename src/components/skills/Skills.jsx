import Frontend from "./Frontend";
import Other from "./Other";
import './skills.css';


const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Навыки</h2>
            <span className="section__subtitle">Технические навыки</span>

            <div className="skills__container container grid">
                <Frontend />
                <Other />
            </div>
        </section>
    )
}

export default Skills;