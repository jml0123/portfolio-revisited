import { useState, useEffect, lazy, Suspense } from 'react';
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { BsMusicPlayerFill } from "react-icons/bs";

import styles from '../styles/scss/Home.module.scss'; // Use import and assign to a variable
import sharedStyles from '../styles/scss/Shared.module.scss'; // Use import and assign to a variable
import { ArtImageData } from './api/getRandomArtwork';
import { fetchRandomArtwork } from '../helpers/interactions';
import Tilt from 'react-parallax-tilt';

// Dynamically import SpotifyNowPlayingWidget component
const LazySpotifyNowPlayingWidget = lazy(() => import('../components/SpotifyWidget/SpotifyWidget'));

export default function Home() {
  const [spotifyData, setSpotifyData] = useState(null);
  const [randomArtImg, setRandomArtImg] = useState<ArtImageData | null>(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchSongData();
    fetchRandomArtwork(setRandomArtImg);
    // Fetch data every 1 minute (60,000 milliseconds)
    const intervalId = setInterval(fetchSongData, 60000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 

  const fetchSongData = async () => {
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
      setSpotifyData(null);
    }
  };

  const ctaIconSize = 18;

  return (
    <>
      <main className={styles.intro}> 
        <div className={styles['intro-wrapper']}> 
          <div className={styles['intro-content-wrapper']}> 
            <div className={styles['intro-content-wrapper--main']}>
               {/* Animated title */}
              <div className={styles['title-bar']}>welcome</div> 
              <div className={styles['socials-wrapper']}>
                <a href="mailto:jsmglorenzo@gmail.com" target="_blank"><SiMinutemailer size={ctaIconSize}/></a>
                <a href="https://www.linkedin.com/in/jml123" target="_blank"><SiLinkedin size={ctaIconSize}/></a>
                <a href="https://github.com/jml0123" target="_blank"><SiGithub size={ctaIconSize}/></a>
                <a href="https://beacons.ai/plygid"><BsMusicPlayerFill size={ctaIconSize}/></a>
              </div>
            </div>
            <div className={styles['intro-content-wrapper--heading']}> 
              <h1>
                <span className={styles['name-span']}>{'>_hi, i\'m miguel'}</span>
                <span className={styles['intro-content-2']}>
                  &nbsp; a software engineer, xr and creative dev, and dj in Brooklyn.
                  As an engineer, I look to build forward-thinking and sustainable systems.
                  As a creative, I envision resonant environments and possibilities.
                </span>
              </h1>
            </div>
            <div className={styles['spotify-widget-wrapper']}>
              {/* Use Suspense for lazy-loaded component */}
              <Suspense fallback={<div>Loading Spotify widget...</div>}>
                {spotifyData && <LazySpotifyNowPlayingWidget data={spotifyData} />}
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      {/* Display random artwork */}
      {randomArtImg && (
        <div className={`${styles['side-accent']} ${sharedStyles['art-div-1']}`} style={{ cursor: 'pointer' }} onClick={() => fetchRandomArtwork(setRandomArtImg)}>
          <Tilt
          gyroscope={true}
          transitionSpeed={222}
          transitionEasing='cubic-bezier(0.16, 1, 0.3, 1);'
          ><img src={randomArtImg.path} alt={randomArtImg.fileName} />
          <span className={sharedStyles['art-caption']}>{randomArtImg.fileName}</span> 
          </Tilt>
        </div>
      )}
    </>
  );
}