import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import ExperienceItem from '../ExperienceItem';

const ExperienceSection = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceHeading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <div />
      </ExperienceHeading>

      <ExperienceContent>
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
`;

const ExperienceHeading = styled(motion.div)`
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

const ExperienceContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
      left: 2rem;
    }
  }
`;

export default ExperienceSection;