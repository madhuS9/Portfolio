import Sidebar from "../siderbar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{ opacity:0, scale:0.5 }} 
                             animate={{ opacity:1, scale:1 }} 
                             transition={{ duration:0.5 }}
                >
                    </motion.span>
                <div className="social">                 
                    <a href="https://www.linkedin.com/in/madhu-s-ba1952213/" target='_blank'><img src="/linkedin.png" alt="linkedin icon"/></a>
                    <a href="https://www.instagram.com/madhu_s36/" target='_blank'><img src="/instagram.png" alt="instagram icon" /></a>
                    <a href="https://github.com/madhuS9" target='_blank'><img src="/github1.png" alt="github icon"/></a>
                    <a href="mailto:madhus2365@gmail.com" target='_blank'><img src="/email.png" alt="send email"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar