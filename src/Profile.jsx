import './App.css';
import { useState, useEffect } from 'react';
import profilePic from './assets/perfil1.png';

// Fotos
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photo5.png';
import photo6 from './assets/photo6.png';
import photo7 from './assets/photo7.png';
import photo8 from './assets/photo8.png';
import photo9 from './assets/photo9.png';

import { FaInstagram, FaXTwitter, FaSpotify } from 'react-icons/fa6';

function Profile() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="container">
      <header className="header glass">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <p class="username">@spammmmmmaria</p>
        <p>crying like a bitch and god isn't listening</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/maria.mgcr/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/emegeceerre" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://open.spotify.com/user/i4opja3dzz6paid0dv8f22321" target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        </div>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Escuro' : '☀️ Claro'}
        </button>
      </header>

      <div className="spotify-embed glass">
        <iframe 
         style={{ borderRadius: "12px" }}
         src="https://open.spotify.com/embed/track/1fCtah6RlmidPvSiyMfncH?utm_source=generator" 
         width="100%" 
         height="80" 
         frameBorder="0" 
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
         loading="lazy">
        </iframe>

      </div>

      <div className="gallery">
        {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9].map((photo, index) => (
          <img key={index} src={photo} alt={`post-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
