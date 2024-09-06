import "./hero.scss";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-110%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },

};

const scrollVariants = {
    initial: {
        y: 0,
        opacity: 0
    },
    animate: (custom) => ({
        y: 10,
        opacity: 1,
        transition: {
            delay: 0,
            duration: 1,
            ease: "easeInOut"
        }
    }),
    exit: {
        y: -10,
        opacity: 0,
        transition: {
            delay: 0,
            duration: 0,
            ease: "easeInOut"
        }
    }
};




const Hero = () => {

    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(currentText => (currentText === 0 ? 1 : 0));
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);


    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Hello! Welcome👋</motion.h2>
                    <motion.h1 variants={textVariants}>
                        I'm Madhu
                    </motion.h1>
                    <motion.p>
                    a passionate Software Engineering student committed to mastering Data Structures and Algorithms to build efficient and innovative solutions.
                    </motion.p>
                    <AnimatePresence mode="wait">
                        {currentText === 1 && (
                            <motion.span
                                key="text1"
                                variants={scrollVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="custom-font"
                            >
                                Software Developer
                            </motion.span>
                        )}
                        {currentText === 0 && (
                            <motion.span
                                key="text2"
                                variants={scrollVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="custom-font"
                            >
                                Fresher
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="#Project">
                            <motion.button variants={textVariants}>
                                See the latest Works
                            </motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button variants={textVariants}>Contact Me</motion.button>
                        </a>
                    </motion.div>
                    <motion.img id="scrollButtonImage" variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""></motion.img>
                </motion.div>
            </div>
            <div className="imageContainer">
                <img src="/img1.png" alt="profilepic" />
            </div>
        </div>
    )
}

export default Hero