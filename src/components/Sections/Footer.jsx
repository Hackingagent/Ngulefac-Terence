import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';
import logo from '../../assets/logo3.jpeg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FooterLogo>
          <img 
            style={{
              height: '100px',
              borderRadius: '50%'
            }}
            src={logo}
          />
        </FooterLogo>

        <FooterLinks>
          {socialLinks.map((link) => (
            <FooterLinkItem key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </FooterLinkItem>
          ))}
        </FooterLinks>

        <FooterCopyright>
          <p>&copy; {new Date().getFullYear()} Ngulefac Terence. All rights reserved.</p>
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.footerText};
  padding: 3rem 5%;
`;

const FooterContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};

  span {
    font-family: 'Fira Code', monospace;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const FooterLinkItem = styled.li`
  a {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.footerText};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-3px);
    }
  }
`;

const FooterCopyright = styled.div`
  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export default Footer;