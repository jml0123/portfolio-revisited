
import { useState, useEffect } from 'react';
import { fetchRandomArtwork } from '../helpers/interactions';
import styles from '../styles/scss/bio.module.scss'; 
import sharedStyles from '../styles/scss/Shared.module.scss'; 
import { ArtImageData } from './api/getRandomArtwork';

export default function BioPage() {

  const [randomArtImg, setRandomArtImg] = useState<ArtImageData | null>(null);

  useEffect(() => {
    fetchRandomArtwork(setRandomArtImg);
  }, []); 
  return (
    <main className={styles.about}>
      <header aria-label="content-header">
        <div className={sharedStyles['content-heading-wrapper']}>
          <h1 className={`${sharedStyles['content-heading']} ${sharedStyles['content-heading--bio']}`}>about</h1>
          <div className={sharedStyles['content-subheading-wrapper']}>
            <h2 className={sharedStyles['content-subheading']}>Things I've been up to</h2>
          </div>
        </div>
      </header>
      <section role="region" aria-label="content">
        <div className={styles['focus-img-wrapper']}>
          <img className={styles['focus-img']} src="img/artwork/dance2trance.jpeg" alt="(Me)" />
        </div>
      </section>
      <section role="region" aria-label="content-2" className={styles['bio']}>
        <div className={styles['bio-container']}>
          <div className={`${styles['bio-container--image']} ${styles['art-div2']}`} style={{ cursor: 'pointer' }} onClick={() => fetchRandomArtwork(setRandomArtImg)}>
            <img src={randomArtImg?.path} alt="Bio Profile" />
            <span className={styles['art-caption']}>{randomArtImg?.fileName}</span>
          </div>
          <div className={styles['bio-wrapper']}>
            <p>
            I’m a Brooklyn-based software engineer, XR, and creative developer who loves to bring ideas to life in many mediums. 
                  With a weird mix of experiences in corporate strategy, project and artist management, 
                  my background has enabled me to take on a macro and micro perspective to building
                  software.
                  <br /><br />
                  I immigrated from the Philippines in 2007 and went to NYU for my undergrad While in school, I was heavily involved in the music scene
                  and worked as a part-time artist manager. After a scheduling mixup in college, I needed to take an extra class to fulfill my credits.
                  Out of curiosity, I took an intro to web programming course and have never looked back since.
                  <br/> <br/>
                  <i>Currently, I wear multiple hats as a backend developer at Cadoo (a fitness gaming startup funded by OpenAI's founder) and contribute my skills as a software developer to various other companies.
                  </i>            
                  </p>
            <div className={styles['interests']}>
              <h1>Interests
                            <span role="img" aria-label="interests">🌀</span>
                        </h1>
                        <ul>
                            <li>Cooking new recipes / eating out</li>
                            <li>Going to live events & venues</li>
                            <li>Museums, art and design</li>
                        </ul>
                        <h1>Books (Favorites & Currently reading)
                            <span role="img" aria-label="books">📚</span>
                        </h1>
                        <ul>
                          <li>
                            The Pragmatic Programmer by David Thomas & Andrew Hunt
                          </li>
                          <li>Mutual Aid by Dean Spade
                            <span className={`${styles['label']} ${styles['label-progress']}`}>
                              In Progress
                            </span>
                          </li>
                          <li>
                            Left Hand of Darkness by Ursula K. Le Guin
                            <span className={`${styles['label']} ${styles['label-progress']}`}>
                              In Progress
                            </span>
                          </li>
                          <li>
                            The Will to Change by bell hooks
                            <span className={`${styles['label']} ${styles['label-progress']}`}>
                              In Progress
                            </span>
                          </li>
                        </ul>
                    </div> 
                  </div>
            </div>
      </section>
    </main>
  );
};
