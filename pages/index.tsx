import { useState, useEffect } from 'react';
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { BsMusicPlayerFill } from "react-icons/bs";

import SpotifyNowPlayingWidget from '../components/SpotifyWidget/SpotifyWidget';
import styles from '../styles/scss/Home.module.scss'; // Use import and assign to a variable
import sharedStyles from '../styles/scss/Shared.module.scss'; // Use import and assign to a variable

export default function Home() {
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();

    // Fetch data every 1 minute (60,000 milliseconds)
    const intervalId = setInterval(fetchData, 60000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://spotify-portfolio-widget.herokuapp.com/currently-playing');
      if (response.ok) {
        const data = await response.json();
        setSpotifyData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const ctaIconSize = 18;

  return (
    <>
      <main className={styles.intro}> 
        <div className={styles['intro-wrapper']}> 
          <div className={styles['intro-content-wrapper']}> 
          <div className={styles['intro-content-wrapper--main']}>
             {/* TODO: Make the below animated with different titles */}
            <div className={styles['title-bar']}>welcome!</div> 
            <div className={styles['socials-wrapper']}>
              <a href="mailto:jsmglorenzo@gmail.com" target="_blank"><SiMinutemailer size={ctaIconSize}/></a>
              <a href="https://www.linkedin.com/in/jml123" target="_blank"><SiLinkedin size={ctaIconSize}/></a>
              <a href="https://github.com/jml0123" target="_blank"><SiGithub size={ctaIconSize}/></a>
              <a href="https://beacons.ai/plygid"><BsMusicPlayerFill size={ctaIconSize}/></a>
            </div>
            </div>
            <div className={styles['intro-content-wrapper--heading']}> 
            <h1><span className={styles['name-span']}>
                        {'>'} i'm miguel_</span> a software eng,
                        <span className={styles['intro-content-2']}> creative technologist, and DJ in Brooklyn.  
                       As a developer, I strive to implement innovative ideas with meticulous detail and clarity. As a creative, I envision and build new environments and possibilities.
                        </span></h1>
            </div>
            <div className={styles['spotify-widget-wrapper']}>
              {spotifyData && <SpotifyNowPlayingWidget data={spotifyData} />}
            </div>
          </div>
        </div>
      </main>
      <div className={`${styles['side-accent']} ${sharedStyles['art-div-1']}`}>
        <img src="img/artworks/Hagihara_4.jpg" />
        <span className={sharedStyles['art-caption']}>萩原 卓哉 (Hagihara Takuya)</span> {/* Use the imported styles variable */}
      </div>
    </>
  );
}