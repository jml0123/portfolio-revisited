import Head from 'next/head';
import styles from '../styles/css/Home.module.css';

export default function Home() {
  return (
    <body className='intro-body'>
    <main className="intro">
        <div className="intro-wrapper">
            <div className="intro-content-wrapper">
                <div className="title-bar">/ software developer</div>
                <div className="intro-content-wrapper--heading">
                    <h1><span className="name-span">Hi I'm Miguel Lorenzo_</span> a generalist software engineer 
                        <span className="intro-content-2">and creative technologist based in Brooklyn NY. Balancer of micro implementation and macro ideas. 
                        Synth patch tweaker and former artist manager with strategy consulting experience.
                        </span></h1>
                </div>
                <div className="socials-wrapper">
                    <a href="https://www.linkedin.com/in/jml123" target="_blank"><img className="socials-icon" src="img/icons/linkedin.png" alt="LinkedIn"/></a>
                    <a href="https://github.com/jml0123" target="_blank"><img className="socials-icon" src="img/icons/github.png" alt="github"/></a>
                    <a href="https://codesandbox.io/u/jml0123" target="_blank"><img className="socials-icon" src="img/icons/codesandbox.png" alt="CodeSandbox"/></a>
                    <a href="https://beacons.ai/plygid"><img className="socials-icon" src="img/icons/cd.png" alt="My Music"/></a>
                </div>
            </div>
        </div>
    </main>
    <div className="side-accent art-div1">
        <img src="img/artworks/Hagihara_4.jpg"/>
        <span className="art-caption">萩原 卓哉 (Hagihara Takuya)</span>
    </div>
    </body>
  );
}
