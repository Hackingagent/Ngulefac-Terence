import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillItem = ({ skill, index }) => {
  return (
    <SkillContainer
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <SkillIcon>{skill.icon}</SkillIcon>
      <SkillInfo>
        <h4>{skill.name}</h4>
        <SkillLevel>
          <SkillProgress level={skill.level} />
        </SkillLevel>
      </SkillInfo>
    </SkillContainer>
  );
};

const SkillContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.cardHover};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  width: ${({ level }) => level}%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
`;

export default SkillItem;