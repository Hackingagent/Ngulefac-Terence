import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/navLinks';
import logo from '../assets/logo2.jpeg';

const Navbar = ({ toggleTheme, theme, toggleSidebar }) => {
  return (

    <NavContainer>
      <Logo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <span>{"<NT />"}</span> */}

        <img
          style={{
            height: '50px',
            borderRadius: '50%',
            // height: '50px'
          }}
        src={logo} />
      </Logo>

      <NavLinks>
        {navLinks.map((link, index) => (
          <NavLinkItem
            key={link.id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={link.url}>{link.name}</a>
          </NavLinkItem>
        ))}
      </NavLinks>

      <ThemeToggle
        onClick={toggleTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeToggle>

      <Hamburger onClick={toggleSidebar}>
        <FaBars />
      </Hamburger>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: ${({ theme }) => theme.nav};
  backdrop-filter: blur(10px);
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};

  span {
    font-family: 'Fira Code', monospace;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinkItem = styled(motion.li)`
  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      transition: all 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled(motion.div)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(20deg);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;