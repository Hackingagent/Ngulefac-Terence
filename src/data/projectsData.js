import complain from '../assets/images/projects/student_complain.jpeg'
import grant from '../assets/images/projects/grant_ease.jpg';
import portfolio from '../assets/images/projects/portfolio.jpg';
import joverto from '../assets/images/projects/joverto.jpg';
import spotfli from '../assets/images/projects/spotfli.png';

export const projectsData = [
    {
      id: 1,
      title: 'Grant Ease',
      description:
        'A fully function web application that digitalize the verification and disbursment process of the Presidential 50k student grant in higher institutions',
      image: grant,
      tags: ['Web', 'python', 'React', 'Laravel', 'REST API'],
      github: 'https://github.com/Hackingagent/Greant-ease-my-final-year-peoject-.git',
      // demo: 'https://ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Student Complain Management System',
      description:
        'A web based application that facilitates the complain submission and management system in Higher Institutions (Universities)',
      image: complain,
      tags: ['Web', 'Laravel', 'MySQL'],
      github: 'https://github.com/Hackingagent/Student-Complaint-Franklin.git',
      demo: 'https://complain.infinityfreeapp.com/',
    },
    {
      id: 3,
      title: 'SPOTFLI',
      description:
        'A real estate web platform that enables the population to look for and rent or buy properties, book for service, and also for hotels booking.',
      image: spotfli,
      tags: ['Web', 'MERN'],
      // github: 'https://github.com/yourusername/weather-app',
      demo: 'https://weather-app-demo.com',
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description:
        'Mobile application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Mobile', 'React Native'],
      github: 'https://github.com/yourusername/fitness-app',
      demo: 'https://fitness-app-demo.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase projects and skills.',
      image: portfolio,
      tags: ['Web', 'React', 'UI/UX'],
      github: 'https://github.com/Hackingagent/Ngulefac-Terence.git',
      demo: 'https://ngulefac-terence.vercel.app/',
    },
    {
      id: 6,
      title: 'Photo Studio Website',
      description:
        'A backend API service with authentication, database integration, and documentation.',
      image: joverto,
      tags: ['Web', 'React', 'UI/UX'],
      // github: 'https://github.com/yourusername/api-service',
      demo: 'https://joverto-studio.vercel.app/',
    },
  ];