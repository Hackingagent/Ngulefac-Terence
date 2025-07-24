import { FaReact, FaNodeJs, FaJs, FaHtml5, FaFigma, FaCss3Alt, FaGitAlt, FaDocker, FaAws, FaLaravel } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiGraphql, SiRedux, SiNextdotjs, SiExpress } from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'JavaScript', icon: <FaJs />, level: 85 },
      // { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'Redux', icon: <SiRedux />, level: 80 },
      // { name: 'Next.js', icon: <SiNextdotjs />, level: 70 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Laravel', icon: <FaLaravel />, level: 85 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
      { name: 'Express', icon: <SiExpress />, level: 50 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      // { name: 'GraphQL', icon: <SiGraphql />, level: 70 },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'Docker', icon: <FaDocker />, level: 65 },
      { name: 'AWS', icon: <FaAws />, level: 60 },
      { name: 'Figma', icon: <FaFigma />, level: 75 },
    ],
  },
];