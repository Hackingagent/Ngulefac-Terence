import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        project.tags.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>My Projects</h2>
        <div />
      </ProjectsHeading>

      <ProjectsFilter>
        {['All', 'Web', 'Mobile', 'API', 'UI/UX'].map((category) => (
          <FilterButton
            key={category}
            onClick={() => handleFilter(category)}
            className={activeFilter === category ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </ProjectsFilter>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
`;

const ProjectsHeading = styled(motion.div)`
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

const ProjectsFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default ProjectsSection;