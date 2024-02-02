import { Grid } from '../components/Grid/Grid';
import styles from '../styles/scss/Projects.module.scss'; 
import sharedStyles from '../styles/scss/Shared.module.scss'; 
import { projectsGridData } from './data/projects.data';


export default function Projects() {
    return (
        <main>
          <header aria-label="content-header">
            <div className={styles['content-heading-wrapper']}>
              <h1 className={`${styles['content-heading']} ${styles['content-heading--work']}`}>Work</h1>
              <div className={styles['content-subheading-wrapper']}>
                <h2 className={styles['content-subheading']}>Connecting ideas end-to-end</h2>
              </div>
            </div>
          </header>
          <section role="region" aria-label="content-2" className={styles.projects}>
            <Grid items={projectsGridData}/>
          </section>
        </main>
      );
    };