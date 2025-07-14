import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/navLinks';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>

      <SidebarLinks>
        {navLinks.map((link) => (
          <SidebarLinkItem key={link.id}>
            <a href={link.url} onClick={toggleSidebar}>
              {link.name}
            </a>
          </SidebarLinkItem>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
};

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => theme.card};
  z-index: 999;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SidebarLinkItem = styled.li`
  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default Sidebar;