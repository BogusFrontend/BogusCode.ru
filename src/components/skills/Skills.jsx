import Frontend from "./Frontend";
import Other from "./Other";
import './skills.css';
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


const Skills = () => {
    return(
        <motion.section initial="hidden" whileInView="visible" className="skills section" id="skills">
            <motion.h2 custom={0.2} variants={leftAnimation} className="section__title">Навыки</motion.h2>
            <motion.span custom={0.3} variants={leftAnimation} className="section__subtitle">Технические навыки</motion.span>

            <div className="skills__container container grid">
                <motion.div custom={0.3} variants={leftAnimation}>
                    <Frontend />
                </motion.div>
                <motion.div custom={0.3} variants={rightAnimation}>
                    <Other />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Skills;