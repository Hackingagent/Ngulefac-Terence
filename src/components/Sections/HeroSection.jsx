import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { heroData } from '../../data/heroData';
import { socialLinks } from '../../data/socialLinks';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>{heroData.greeting}</Greeting>
          <Name>{heroData.name}</Name>
          <Title>{heroData.title}</Title>
          <Description>{heroData.description}</Description>
          <ResumeButton
            href={heroData.resumeLink}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </ResumeButton>
        </HeroText>

        <HeroImage
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={heroData.image} alt={heroData.name} />
        </HeroImage>
      </HeroContent>

      <SocialLinks
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {socialLinks.map((link) => (
          <SocialLinkItem key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </SocialLinkItem>
        ))}
      </SocialLinks>

      <ScrollDown>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollLine />
      </ScrollDown>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const SocialLinks = styled(motion.ul)`
  position: absolute;
  left: 5%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  &::after {
    content: '';
    width: 1px;
    height: 100px;
    background: ${({ theme }) => theme.text};
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialLinkItem = styled.li`
  a {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-3px);
    }
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 100px;
  background: ${({ theme }) => theme.text};
`;

export default HeroSection;