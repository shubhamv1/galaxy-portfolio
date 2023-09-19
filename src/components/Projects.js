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
      description: "Real-Time Data Updates: ReactJS allows for seamless integration with real-time data sources like APIs, making it ideal for displaying live cryptocurrency price and market data.component-based architecture makes it straightforward to build a responsive and user-friendly interface that works well on both desktop and mobile devices.",
      imgUrl: projImg1,
    },
    {
      title:"Podcast-Plateform",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Finance-Tracker",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "3d-portfolio",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce ",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "3d game ",
      description: "Design & Development",
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
