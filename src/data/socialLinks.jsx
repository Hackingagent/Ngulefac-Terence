import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/Hackingagent',
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: <FaInstagram />,
  },
  {
    id: 5,
    name: 'Email',
    url: 'mailto:your.terencen143@icloud.com',
    icon: <HiOutlineMail />,
  },
];