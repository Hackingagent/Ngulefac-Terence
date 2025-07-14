import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import SkillItem from '../SkillItem';

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsHeading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>My Skills</h2>
        <div />
      </SkillsHeading>

      <SkillsContent>
        {skillsData.map((skillCategory, index) => (
          <SkillsCategory
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{skillCategory.category}</h3>
            <SkillsList>
              {skillCategory.skills.map((skill, idx) => (
                <SkillItem
                  key={idx}
                  skill={skill}
                  index={idx}
                />
              ))}
            </SkillsList>
          </SkillsCategory>
        ))}
      </SkillsContent>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
`;

const SkillsHeading = styled(motion.div)`
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

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default SkillsSection;