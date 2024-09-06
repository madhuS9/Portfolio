import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gn7d6go', 'template_27ty1t3', formRef.current, 'DQsTHBuZJy_UYat2v')
            .then(
                (result) => {
                    console.log(result);
                    setSuccess(true)
                },
                (error) => {
                    console.log(error);
                    setError(true);
                }
            );
    };

    return (
        <div
            className="contact"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Get in Touch</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>madhus2365@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>(+91) 7981817322</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Vijayawada, Andhra Pradesh, india</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} required placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </div>
    )
}

export default Contact