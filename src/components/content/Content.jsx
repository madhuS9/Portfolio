import "./content.scss"
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Content = () => {

    const ref = useRef()

    return (
        <motion.div
            className="content"
            variants={variants}
            initial="initial"
            //   animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>These are my Inetrnships.
                    <br />Let's take a look
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/bulb.png" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "#efc838" }}>Unique</motion.b> types
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "#efc838" }}>Virtual</motion.b> Internships.
                    </h1>
                    <a>
                        <button>WHAT I DO?</button>
                    </a>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "#222825" }} >
                    <h2>Data Science Master Virtual Intership</h2>
                    <p >This offers hands-on experience with data science projects and tools. Participants learn key concepts such as data manipulation and machine learning.
                        It's ideal for those with basic data science knowledge looking to gain practical skills.
                    </p>
                    <a href="https://drive.google.com/file/d/1oYsLRm_b6dO8C7y_oG0WbW2VY1pcVsKt/view?usp=sharing" target='_blank'>
                        <button><b>Certificate</b></button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "#222825" }}>
                    <h2>Data Engineering virtual Internship</h2>
                    <p>This provides practical experience in building and managing data pipelines.
                        Participants learn to use AWS tools and services for data ingestion, transformation, and analysis.
                        The program is used to develop skills in data engineering.
                    </p>

                    <a href="https://drive.google.com/file/d/1C1MWpGOn2GjFqKeTy_HkxrRAdAnO2S9g/view?usp=sharing" target='_blank'>
                        <button><b>Certificate</b></button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "#222825" }}>
                    <h2>Cybersecurity virtual Internship</h2>
                    <p>The Cybersecurity Virtual Internship  experience with real-world cybersecurity challenges.
                        Participants learn about threat detection, incident response, and security best practices .
                        The internship includes practical projects.
                    </p>
                    <a href="https://drive.google.com/file/d/1qBrpxKbuVw7p0MrHuqIlCdB0E-xIuSjc/view?usp=sharing" target='_blank'>
                        <button><b>Certificate</b></button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "#222825" }}>
                    <h2>Google Cloud Generative-AI</h2>
                    <p>This Internship immerses participants in developing and deploying generative AI models using Google Cloud tools.
                        Interns tackle real-world problems and gain expertise in AI applications.
                        The program offers mentorship from Google professionals and a certificate upon completion.
                    </p>
                    <a href="">
                        <button><b>Comming soon</b></button>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Content