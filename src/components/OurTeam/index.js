import { CiMail, CiLinkedin } from "react-icons/ci";

import Header from "../Header";
import TeamMember from "../TeamMember";
import './index.css'

const teamMembers = [
    {
        name: 'Namratha',
        role: 'Frontend Developer',
        description: `Namratha is the creative mind behind FGH’s sleek and user-friendly
         interface. With a knack for turning complex designs into seamless user experiences,
          they lead the charge in ensuring every visitor feels right at home. Skilled in 
          technologies like React, JavaScript, Bootstrap, HTML5, CSS3, Tailwind CSS they are passionate about 
          crafting innovative solutions for modern problems.`,
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736696051/cfrwk5mhrool62frl9bv.png'
    },
    {
        name: 'Susheel Kumar',
        role: 'Backend Developer',
        description: `Susheel Kumar is the backbone of FGH’s robust and efficient server-side 
        architecture. With expertise in technologies like Spring Boot, NodeJS, JSP, Servlets, 
        MVC, and Machine Learning, he ensures seamless data flow and application performance. 
        Skilled in tools like Git, AWS, MySQL, DynamoDB, and H2 Database, Susheel Kumar is 
        passionate about building scalable solutions that power modern applications.`,
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736696063/kx6ogsgfvzzbbeewzeoa.png'
    },
    {
        name: 'Manichandana',
        role: 'UI/UX Designer',
        description: `Manichandhana a creative and detail-oriented UI/UX designer with a passion
         for crafting intuitive and visually engaging user experiences. thrive on blending design 
         principles with innovative solutions.`,
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736696073/hotd6arrt2mjwcynyqlh.png'
    },
    {
        name: 'Hemalatha',
        role: 'Java Developer',
        description: `Hemalatha is the creative mind behind FGH’s sleek and user-friendly
         interface. With a knack for turning complex designs into seamless user experiences,
          they lead the charge in ensuring every visitor feels right at home. Skilled in 
          technologies like Java, Sql, HTML, CSS, Sprimg, Springboot they are passionate about 
          crafting innovative solutions for modern problems.`,
        image: 'https://res.cloudinary.com/dpamz1hsi/image/upload/c_crop,g_auto,h_300,w_300,r_max/zkxciqkcnjylfq5m2eqd.png'
    }
]

const OurTeam = () => (
    <>
        <Header/>
        <div className="profile-card-container">
        <h1>Meet Our Crew</h1>
        <div className="profile-card">
            <div className="profile-image">
            <img
                src="https://res.cloudinary.com/dpamz1hsi/image/upload/c_auto,g_auto,h_280,w_350,r_max/qi9cpaczeepx9dalaaq5.png"
                alt="founder-img"
                className="founder-img"
            />
            </div>
            <div className="profile-details">
            <h2>Prasad.M | <span>Founder & CEO</span></h2>
            <p>
                Prasad, the visionary CEO of FGH, combines over 13 years of expertise in EHS, ESG,
                and Sustainability with a passion for leveraging technology to make a difference.
                He founded FGH with a mission to empower students, professionals, and individuals
                from all walks of life to earn and learn through collaborative efforts. His
                commitment to fostering opportunities and creating a connected digital platform has
                been the cornerstone of FGH's success.
            </p>
            <p>
                Prasad is a creative powerhouse who loves being a YouTuber and digital creator.
                When he's not building platforms, you'll find him binge-watching movies, dancing to
                catchy tunes, or penning heartfelt poetry!!
            </p>
            <div className="profile-bottom">
                <blockquote>
                    "At FGH, we strive to create opportunities that blend passion and purpose. Together,
                    let's redefine how we learn and earn in the digital age."
                </blockquote>
                <div className="founder-contact">
                    <h5>Contact</h5>
                    <div className="profile-contact">
                        <a href="https://www.linkedin.com/in/createrprasad/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className="icon-our-team"/>
                        </a>
                        <a href="mailto:creator.prasad@gmail.com">
                        <CiMail className="icon-our-team"/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <ul className="team-members">
            {
                teamMembers.map((mem) => (
                    <TeamMember mem={mem}/>
                ))
            }
        </ul>
    </>
)

export default OurTeam