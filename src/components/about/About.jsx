import './about.scss';

const About = () => {
  return (

    <div className="about">

      <div className="intro">
        <div className="about_section">
          <h2>Get to Know Me</h2>
          <hr />
          <p>👋 Hello! I'm Madhu, a final-year BTech student specializing in Information Technology at PVPSIT College. I have a strong passion for coding with advanced skills in Data Structures and Algorithms (DSA). Throughout my academic journey, I have successfully completed several projects, including a Fashion Recommendation System, Portfolio Website, and Quiz Application. Additionally, I have gained practical experience through virtual internships in cybersecurity, data science, and data engineering. I am committed to continuous improvement and eagerly look forward to leveraging my skills and knowledge in real-world applications</p>
          <br />
          <p id="welcome"><b>Welcome to my digital abode!</b></p>
          <a href="#Contact">
            <button>Contact</button>
          </a>
          <a href="https://drive.google.com/file/d/1I7VRmhG9PknMXQPfJqhR3U6KKrooRMV0/view?usp=sharing" target='_blank'>
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div className="skills_and_image">
        <div className="skills_and_image_left">
          <div className="skills">
            <h2>My Skills</h2>
            <hr />
            <div className="skills_container">
              <div className="skills_skill">Problem Solving</div>
              <div className="skills_skill">C, C++, Python</div>     
              <div className="skills_skill">React JS</div>
              <div className="skills_skill">HTML/CSS</div>
              <div className="skills_skill">MySQL</div>
              <div className="skills_skill">DSA</div>        
              
            </div>
          </div>

          <div className="experience">
            <h2>Education</h2>
            <hr />
            <p>B. Tech in IT , Prasad V. Potluri Siddhartha Institute Of Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021 -- 2025</p>
            <p>Intermediate(MPC) , Sri Chaitanya Junior College&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019 -- 2021</p>
            <p>Class X, Ravindra Bharathi Public School&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018 -- 2019</p>
          </div>
        </div>
        <div className="skills_and_image_right">
          <img src="/img.png" alt="my profile" className="skills_image" />
        </div>
      </div>
    </div>
   ); 
} 
 
export default About