import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Bluff City Paving",
      description: "Bluff City Asphalt provides expert asphalt paving, repair, and maintenance services for residential, commercial, and industrial clients.",
      image: `${process.env.PUBLIC_URL}/assets/image3.png`,
      link: "https://bluffcityasphalt.com/",
    },
    {
      title: "SERP-P",
      description: "The SERP-P website offers access to a comprehensive database of Philippine development research, fostering informed policymaking and knowledge sharing.",
      image: `${process.env.PUBLIC_URL}/assets/image2.png`,
      link: "https://serp-p.pids.gov.ph",
    },
    {
      title: "Asphalt Services Inc.",
      description: "Asphalt Services Inc. specializes in high-quality asphalt paving, repair, and maintenance for residential, commercial, and industrial projects.",
      image: `${process.env.PUBLIC_URL}/assets/image1.png`,
      link: "https://asphaltservicesinc.com/",
    },
    {
      title: "King's College of the Philippines",
      description: "King’s College of the Philippines understands the value of digitalization to further its goals and mission to current and prospective constituents. ",
      image: `${process.env.PUBLIC_URL}/assets/image6.png`,
      link: "https://kcp.edu.ph/",
    },
    {
      title: "Kode Across",
      description: "A trusted software development company that helps businesses of all sizes across industries.",
      image: `${process.env.PUBLIC_URL}/assets/image5.png`,
      link: "https://kodeacross.com/",
    },
    {
      title: "R & S Paving LLC",
      description: "Specializes in driveway paving, parking lot resurfacing, sealcoating, and concrete work for residential and commercial clients.",
      image: `${process.env.PUBLIC_URL}/assets/image7.png`,
      link: "https://www.rspavingllc.com/",
    },
    {
      title: "AirFloat",
      description: "Airfloat is a leader in material handling solutions, specializing in air caster technology that enables heavy-load movement with precision and ease.",
      image: `${process.env.PUBLIC_URL}/assets/image9.png`,
      link: "https://airfloat.com/",
    },
    {
      title: "Align Production System",
      description: "Align Production Systems delivers advanced material handling and motion control solutions designed to enhance efficiency and precision across industries.",
      image: `${process.env.PUBLIC_URL}/assets/image4.png`,
      link: "https://alignproductionsystems.com/",
    },
    {
      title: "RampDD",
      description: "RampDD is a cutting-edge platform specializing in digital transformation and custom software solutions. They empower businesses by providing tailored tools for streamlined operations, enhanced productivity, and scalable growth.",
      image: `${process.env.PUBLIC_URL}/assets/image8.png`,
      link: "https://rampdd.com/",
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <p>A Glimpse Into My Recent Work</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
