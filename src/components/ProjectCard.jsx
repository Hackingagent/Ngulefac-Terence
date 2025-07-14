import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <ProjectContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <ProjectImage>
        <img src={project.image} alt={project.title} />
      </ProjectImage>

      <ProjectContent>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ProjectTags>
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </ProjectTags>

        <ProjectLinks>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    background: ${({ theme }) => theme.primary};
    color: #fff;
    border-radius: 50px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export default ProjectCard;