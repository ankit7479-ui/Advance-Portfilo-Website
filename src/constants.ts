import { Github, Linkedin, Twitter, Mail, Code2, Database, Globe, Smartphone, Layout, Server } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  { name: 'Python', icon: 'Python', category: 'Backend' },
  { name: 'Django', icon: 'Django', category: 'Backend' },
  { name: 'JavaScript', icon: 'JS', category: 'Frontend' },
  { name: 'React', icon: 'React', category: 'Frontend' },
  { name: 'SQL', icon: 'SQL', category: 'Database' },
  { name: 'MongoDB', icon: 'MongoDB', category: 'Database' },
  { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
  { name: 'Java', icon: 'Java', category: 'Backend' },
];

export const PROJECTS = [
  {
    title: 'Fitness Tracker Web Application',
    description: 'A responsive fitness dashboard with exercise logging, workout routines, and progress tracking.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://picsum.photos/seed/fitness/800/600',
    category: 'Full Stack'
  },
  {
    title: 'Movie Database Web Application',
    description: 'Intelligent search, advanced filtering, and watchlist management using TMDB API.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TMDB API'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://picsum.photos/seed/movies/800/600',
    category: 'Frontend'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and Tailwind CSS to showcase expertise.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://picsum.photos/seed/portfolio/800/600',
    category: 'Frontend'
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ankit-kourav', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/ankitkourav89', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Email', href: 'mailto:ankitkourav89@gmail.com', icon: Mail },
];
