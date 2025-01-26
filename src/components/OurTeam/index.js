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

const cxos = [
    {
        name: 'Irfhan Ahamed',
        role: 'Chief Technology Officer',
        description: `With over 23 years of expertise in IT infrastructure and project management, 
        Irfhan Ahamed drives technological innovation as the Chief Technology Officer of FGH. His 
        extensive experience spans designing and implementing data, voice, Wi-Fi, CCTV, security, 
        AV, and home automation systems, as well as building IT and ELV infrastructure for industries, 
        hospitals, and homes. This expertise ensures FGH delivers seamless, connected solutions for 
        students, professionals, and businesses.
        Irfhan’s career highlights include pivotal roles such as IT & ELV Project Manager at the 
        Amara Raja Group. He began his journey as a Customer Support Engineer at Jesuma Computers, 
        refining his technical and leadership skills.
        When he’s not exploring the latest tech trends, Irfhan enjoys helping others, engaging as an 
        entertainment activist, and mentoring young IT enthusiasts.`,
        image: 'https://res.cloudinary.com/dpamz1hsi/image/upload/r_max/v1737869655/WhatsApp_Image_2025-01-24_at_15.16.14_wbcufj.png'
    },{
        name: 'Kiran Kumar G',
        role: 'Chief Operations Officer',
        description: `Kiran Kumar, COO at FGH, brings over 8 years of expertise in resource management 
        and operational strategy. With a proven track record at EY, he specializes in project scheduling, 
        demand management, and dashboard creation, driving efficiency and seamless operations at FGH.
        Fun Fact: When not strategizing, Kiran loves exploring new places and cuisines while mentoring young talents.`,
        image: 'https://res.cloudinary.com/dpamz1hsi/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1737717053/WhatsApp_Image_2025-01-24_at_15.17.10_nbrbau.png'
    },
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
        <ul className="cxos-team">
            {
                cxos.map((mem) => (
                    <TeamMember mem={mem}/>
                ))
            }
        </ul>
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