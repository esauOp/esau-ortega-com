import { useState } from 'react';

import './App.css';

import { Footer } from './components/Footer';
import { Hello } from './components/Hello';

function App() {
  const [linkList, setLinks] = useState([
    { id: 'home', description: 'Home', link: '/' },
    { id: 'Experience', description: 'Experience', link: '/' },
    { id: 'projects', description: 'Projects', link: '/' },
    { id: 'Skills', description: 'Skills', link: '/' },
    { id: 'Blog', description: 'Blog', link: '/' },
    { id: 'about', description: 'About', link: '/' },
  ]);

  const [socialList, setSocial] = useState([
    { id: 'github', icon: 'fab fa-github', link: 'https://github.com/esauop' },
    {
      id: 'instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/esauop/',
    },
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/esauop/',
    },
    {
      id: 'twitter',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/esauop',
    },
    {
      id: 'gmail',
      icon: 'fas fa-at',
      link: 'mailto:hola@esauortega.com',
    },
  ]);

  return (
    <div className="App">
      <Hello></Hello>
      <Footer items={socialList}></Footer>
    </div>
  );
}

export default App;
