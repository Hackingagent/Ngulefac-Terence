import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/aboutData';
import { FaAward, FaCode, FaProjectDiagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutHeading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <div />
      </AboutHeading>

      <AboutContent>
        <AboutImage
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={aboutData.image} alt="About" />
        </AboutImage>

        <AboutInfo
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutCards>
            <AboutCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaAward />
              <h5>Experience</h5>
              <small>{aboutData.experience}</small>
            </AboutCard>

            <AboutCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaCode />
              <h5>Skills</h5>
              <small>{aboutData.skillsCount}+</small>
            </AboutCard>

            <AboutCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaProjectDiagram />
              <h5>Projects</h5>
              <small>{aboutData.projectsCount}+</small>
            </AboutCard>
          </AboutCards>

          <AboutText>
            <p>{aboutData.bio}</p>
          </AboutText>

          <AboutCTA>
            <a href="#contact" className="btn-primary">
              Let's Talk
            </a>
          </AboutCTA>
        </AboutInfo>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
  position: relative;
`;

const AboutHeading = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
    white-space: nowrap;
  }

  div {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.text};
    opacity: 0.2;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;

const AboutInfo = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }

  small {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
`;

const AboutText = styled.div`
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

const AboutCTA = styled.div`
  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: ${({ theme }) => theme.primary};
    color: #fff;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.secondary};
    }
  }
`;

export default AboutSection;