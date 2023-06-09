import {motion} from "framer-motion";

import Social from "./Social";
import Data from "./Data";
import './home.css';


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

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rightAnimation}
                        custom={0.3}
                        className="home__img"></motion.div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;