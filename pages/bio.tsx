
import { useState, useEffect } from 'react';
import { fetchRandomArtwork } from '../helpers/interactions';
import styles from '../styles/scss/Bio.module.scss'; 
import sharedStyles from '../styles/scss/Shared.module.scss'; 
import { ArtImageData } from './api/getRandomArtwork';
import Tilt from 'react-parallax-tilt';

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
          <img className={styles['focus-img']} src="img/misc/nara_deer.jpg" alt="(A film photo I took while visiting Nara, Japan :~))" />
        </div>
      </section>
      <section role="region" aria-label="content-2" className={styles['bio']}>
        <div className={styles['bio-container']}>
          <div className={`${styles['bio-container--image']} ${styles['art-div2']}`} style={{ cursor: 'pointer' }} onClick={() => fetchRandomArtwork(setRandomArtImg)}>
          <Tilt
          gyroscope={true}
          transitionSpeed={222}
          transitionEasing='cubic-bezier(0.16, 1, 0.3, 1);'
          ><img src={randomArtImg?.path} alt="Bio Profile" />
                    <span className={sharedStyles['art-caption']}>{randomArtImg?.fileName}</span>

          </Tilt>
          </div>
          <div className={styles['bio-wrapper']}>
            <p>
                  I’m a software engineer and musician living in Brooklyn who loves to build new ideas to life. 
                  With a diverse mix of experiences in engineering, strategy, artist management, and composition, 
                  my background has enabled me to practice engineering and creative work as a more a holistic process.
                  <br /><br />
                  I immigrated from the Philippines in 2007 and went to NYU for my undergrad While in school, I was heavily involved in the music scene
                  and worked as a part-time artist manager. After a scheduling mixup in college, I needed to take an extra class to fulfill my credits.
                  Out of curiosity, I took an intro to web programming course and have never looked back since.
                  <br/> <br/>
              
                  </p>
            <div className={styles['interests']}>
              <h1>Interests
                        <span role="img" aria-label="interests">🌀</span>
                        </h1>
                        <ul>
                            <li>Cooking, experimenting with new recipes / trying new foods</li>
                            <li>Learning more about the history of different spices and cuisines</li>
                            <li>Working on new sound design ideas and collaborating on music</li>
                            <li>Film photography</li>
                        </ul>
                        <h1>Books (Noteables & Currently reading)
                            <span role="img" aria-label="books">📚</span>
                        </h1>
                        <ul>
                          <li>
                            The Pragmatic Programmer by David Thomas & Andrew Hunt
                          </li>
                            <li>Sikodiwa by Carl Lorenz Cervantes
                              <span className={`${styles['label']} ${styles['label-progress']}`}>
                              In Progress
                            </span>
                          </li>
                          <li>Assembling a Black Counter Culture by DeForrest Brown Jr.
                          </li>
                          <li>Mutual Aid by Dean Spade
                          </li>
                          <li>
                            Left Hand of Darkness by Ursula K. Le Guin
                          </li>
                        </ul>
                    </div> 
                  </div>
            </div>
      </section>
    </main>
  );
};
