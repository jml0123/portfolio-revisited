export default function Bio() {
    return (

        <main>
          <header aria-label="content-header">
            <div className="content-heading-wrapper">
              <h1 className="content-heading content-heading--bio">Bio</h1>
              <div className="content-subheading-wrapper">
                <h2 className="content-subheading">Beyond the code</h2>
              </div>
            </div>
          </header>
          <section role="region" aria-label="content">
            <div className="globe-wrapper">
              <img className="globe" src="img/blocks.gif" alt="Gradient Gif" />
            </div>
          </section>
          <section role="region" aria-label="content-2" className="bio">
            <div className="bio-container">
              <div className="bio-container--image art-div2">
                <img src="img/artworks/hagihara_1.jpeg" alt="Bio Profile" />
                <span className="art-caption">by 萩原 卓哉 (Hagihara Takuya)</span>
              </div>
              <div className="bio-wrapper">
                <p>
                  I’m a Brooklyn-based fullstack developer who loves to bring ideas to life on the web. 
                  With a weird mix of experiences in corporate strategy, project and artist management, 
                  my background has enabled me to take on a macro and micro perspective to building
                  software.
                  <br /><br />
                  I immigrated from the Philippines in 2007 and went to NYU for my undergrad (B.A. 2019). While in school, I was heavily involved in the music scene
                  and worked as a part-time artist manager. After a scheduling mixup in college, I needed to take an extra class to fulfill my credits.
                  Out of curiosity, I took an intro to web programming course and have never looked back since.
                </p>
                <div className="interests">
                        <h1>Interests
                            <span role="img" aria-label="interests">🌀</span>
                        </h1>
                        <ul>
                            <li>Cooking new recipes / eating out</li>
                            <li>Music production/audio engineering / synthesizers</li>
                            <li>Visiting art museums</li>
                        </ul>
                        <h1>Books (Currently reading)
                            <span role="img" aria-label="books">📚</span>
                        </h1>
                        <ul>
                            <li>Ocean of Sound by David Toop</li>
                            <li>Waystations of the Deep Night by Marcel Brion</li>
                            <li>The Pragmatic Programmer by David Thomas & Andrew Hunt 
                                <span className="label label-progress">
                                In Progress</span></li>
                            <li>Design of Everyday Things by Don Norman  
                                <span className="label label-progress">
                                In Progress</span></li>
                            <li>Thought Forms by A. Besant, C. W. Leadbeater <span className="label label-progress">
                                In Progress</span></li>
                        </ul>
                        <h1>Music
                            <span role="img" aria-label="music">〰️</span>
                        </h1>
                        <ul>
                            <li>90-00's Chicago Deep House</li>
                            <li>Early-Mid 00's dubstep</li>
                            <li>DnB / Jungle</li>
                            <li>Modal jazz / post bop</li>
                            <li>Piero Umiliani / old film scores</li>
                            <li>'IDM' (Aphex Twin / Squarepusher, etc.)</li>
                            <li>Some favorite producers: Madlib, The Alchemist, Knxwledge</li>
                            <li>Dub Music</li>
                            <li>Ambient / ambient techno</li>
                            <li><i>Too many - here's my
                                <a href="https://open.spotify.com/user/jmlorenzo96?si=GQ1JagBxS4K0-6bU5VGlXw" target="_blank">Spotify</a>
                                and 
                                <a href="https://www.discogs.com/user/jsmglorenzo/collection" target="_blank"
                                >record collection!</a>
                            </i></li>
                        </ul>
                    </div> 
              </div>
            </div>
          </section>
        </main>
   
    );
  }
  