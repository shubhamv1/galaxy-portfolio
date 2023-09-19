import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Crypto-Tracker",
      description: "Developed a ReactJS-based cryptocurrency tracker project for real-time monitoring. Offers comprehensive crypto data, charts, and portfolio management. Enhances user engagement in the dynamic world of cryptocurrencies.",
      imgUrl: projImg1,
    },
    {
      title:"Podcast-Plateform",
      description: "Engage: Create an immersive podcast platform with ReactJS to captivate users and keep them hooked with compelling content.Streamline: Utilize React's efficiency to streamline the user experience, ensuring smooth navigation and seamless playback.",
      imgUrl: projImg2,
    },
    {
      title: "Finance-Tracker",
      description: "Developed a ReactJS-based finance tracker, providing users with intuitive budget management tools and real-time financial insights. Enhanced user experience through responsive design and interactive data visualization, empowering users to take control of their finances.",
      imgUrl: projImg3,
    },
    {
      title: "3d-portfolio",
      description: "Crafted a dynamic 3D portfolio using ReactJS, showcasing a diverse range of creative projects.Implemented interactive features and animations for an engaging user exploration experience.Seamlessly integrated responsive design to showcase work across various devices, enhancing accessibility.",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce ",
      description: "Developed an e-commerce platform using ReactJS for a dynamic and user-friendly online shopping experience. Integrated robust features, intuitive UI, and secure payment processing to enhance customer engagement. Delivered a scalable and efficient solution for a seamless online retail presence.",
      imgUrl: projImg5,
    },
    {
      title: "3d game ",
      description: "Developed a dynamic 3D game using JavaScript, pushing boundaries in graphics and interactivity, delivering an engaging gaming experience.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"In frontend development, I've built projects using React, showcasing my proficiency in this popular JavaScript library. These projects reflect my dedication to creating dynamic and interactive user interfaces. In conclusion, my React expertise enhances my ability to craft engaging web applications."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Now working my new project</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Now working my new project</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
