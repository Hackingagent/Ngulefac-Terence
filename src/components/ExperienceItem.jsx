import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceItem = ({ experience, index }) => {
  return (
    <ExperienceContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      position={index % 2 === 0 ? 'left' : 'right'}
    >
      <ExperienceIcon>
        <FaBriefcase />
      </ExperienceIcon>
      <ExperienceContent>
        <span>{experience.date}</span>
        <h3>{experience.position}</h3>
        <h4>{experience.company}</h4>
        <p>{experience.description}</p>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(motion.div)`
  display: flex;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
  margin-bottom: 3rem;
  position: relative;
  padding: ${({ position }) =>
    position === 'left' ? '0 0 0 4rem' : '0 4rem 0 0'};

  @media screen and (max-width: 768px) {
    padding: 0 0 0 4rem;
    justify-content: flex-start;
  }
`;

const ExperienceIcon = styled.div`
  position: absolute;
  left: ${({ position }) => (position === 'left' ? '-1.5rem' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '-1.5rem' : 'auto')};
  top: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    left: -1.5rem;
    right: auto;
  }
`;

const ExperienceContent = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 0.5rem;
  width: calc(50% - 2rem);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.primary};
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    margin: 0.5rem 0;
  }

  h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    line-height: 1.6;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default ExperienceItem;