import "./project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from 'react';

const items = [
    {
        id: 1,
        title: "Fashion Recommendation System Using CNN",
        img: "/1.png",
        desc: "Implemented a fashion recommendation system leveraging convolutional neural networks (CNN) to analyze fashion images, Utilized the ResNet50 architecture to extract meaningful features from the images, Applied a nearest neighbor model to match and recommend similar fashion items.Processed image data to tailor recommendations based on user preferences and style.The system effectively suggests fashion items by combining advanced feature extraction and similarity matching techniques..",
        sourceCodeLink: "https://github.com/",
        liveLink: "",
        table: [
            { tech: "Python", feature: "Implement Machine learning or Deep learning." },
            { tech: "Streamlit", feature: "Builds interactive data apps quickly." },
            { tech: "scikit-learn", feature: "Provides machine learning algorithms and tools." },
            { tech: "TensorFlow", feature: "Framework for deep learning model creation and training." },
        ]
    },
    {
        id: 2,
        title: "Portfolio Website Using React",
        img: "/2.png",
        desc: "Created a portfolio website to showcase personal projects and skills in web development.Designed an intuitive layout using React JS to ensure a seamless user experience.Implemented features such as project a contact form,about,content, projects and a blog section.Optimized the site for performance and responsiveness across different devices.Integrated interactive elements to highlight achievements and provide a dynamic presentation of work..",
        sourceCodeLink: "https://github.com/",
        table: [
            { tech: "JavaScript", feature: "Adds interactivity and dynamic behavior to web pages, enhancing user experience.." },
            { tech: "React", feature: "Drives the dynamic and responsive user interface for real-time dashboards." },
            { tech: "SCSS", feature: "A CSS preprocessor that adds variables, nested rules, and mixins for more maintainable styles.." }
        ]
    },
    {
        id: 3,
        title: "Quiz App Using React,MongoDB",
        img: "/3.png",
        desc: "Developed a quiz app using React for the frontend and Next.js for server-side rendering and routing.Implemented MongoDB as the database to store quiz data, including questions and user responses.Enabled users to create, delete, and edit quizzes through a user-friendly interface.Added functionality to allow users to retry quizzes and track their performance.Integrated form validation and error handling to ensure a smooth and reliable quiz-taking experience.",
        sourceCodeLink: "https://github.com/",
        table: [
            { tech: "React", feature: "Provides a component-based architecture for building interactive UIs." },
            { tech: "NextJS", feature: "Enhances React with server-side rendering and static site generation for improved performance and SEO." },
            { tech: "MongoDB", feature: "A NoSQL database that stores data in flexible, JSON-like documents." },
            { tech: "Quiz builder", feature: "Allows users to easily create, customize, and manage quizzes with a dynamic and responsive interface." },
        ]
    },
];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const checkIfMobile = () => setIsMobile(mediaQuery.matches);
  
      mediaQuery.addListener(checkIfMobile);
      checkIfMobile();
  
      return () => mediaQuery.removeListener(checkIfMobile);
    }, []);
  
    return isMobile;
  };
  


const Single = ({ item }) => {

    const ref = useRef();

    const isMobile = useIsMobile();

    const [showTable, setShowTable] = useState(false); // State to toggle table visibility

    // Function to toggle the state
    const toggleTable = () => {
        setShowTable(prevShowTable => !prevShowTable);
    };


    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);



    return (
        <section id={"case-study-" + item.id}>
            <div className="container">
                <div className="wrapper">
                    <div className={`imageContainer container-${item.id}`} ref={ref}>
                        <div className="laptop-frame">
                            <div className="video-resizer">
                                <img src={item.img} alt="" id="project-gif" />
                            </div>
                            <img src={"laptop.png"} alt="laptop-frame" id="laptop-img" />
                        </div>
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>
                            {item.id === 1 && (
                                <>
                                    <motion.span whileHover={{ color: "#efc838" }}>Fashion</motion.span>
                                    {" Recommendation System"}
                                </>
                            )}
                            {item.id === 2 && (
                                <>
                                    <motion.span whileHover={{ color: "#efc838" }}>Portfolio</motion.span>
                                    {" Website"}
                                </>
                            )}
                            {item.id === 3 && (
                                <>
                                    <motion.span whileHover={{ color: "#efc838" }}>Quiz App</motion.span>
                                    {" Using React,mongoDB"}
                                </>
                            )}
                            
                        </h2>
                        <p>{item.desc}</p>


                        <div className="buttons">
                            <a href={item.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                                <button><b>Source Code ↗</b></button>
                            </a>

                            {item.liveLink && (
                                <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                    <button id="livelink"><b>See Live ↗</b></button>
                                </a>
                            )}

                            {!(isMobile && item.id === 1) && (
                                <button onClick={toggleTable}>
                                    <b>{showTable ? 'Show Less' : 'Read More'}</b>
                                </button>
                            )}
                        </div>

                        {showTable && item.table && (
                            <table>
                                <tbody>
                                    {item.table.map((row, index) => (
                                        <tr key={index}>
                                            {row.tech && row.feature ? (
                                                <>
                                                    <td><strong>{row.tech}</strong></td>
                                                    <td>{row.feature}</td>
                                                </>
                                            ) : row.task && row.details ? (
                                                <>
                                                    <td><strong>{row.task}</strong></td>
                                                    <td>{row.details}</td>
                                                </>
                                            ) : null}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Project = () => {
    const ref = useRef();


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="project" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;