import { projectsGridData } from './data/projects.data';

import styles from '../styles/scss/Projects.module.scss'; 
import sharedStyles from '../styles/scss/Shared.module.scss'; 
import FilterableGrid from '../components/FilterGrid/FilterGrid';

export default function Projects() {
    return (
        <main className={styles.building}>
          <header aria-label="content-header">
            <div className={sharedStyles['content-heading-wrapper']}>
              <h1 className={`${sharedStyles['content-heading']} ${sharedStyles['content-heading--work']}`}>projects</h1>
              <div className={sharedStyles['content-subheading-wrapper']}>
                <h2 className={sharedStyles['content-subheading']}>Building ideas end-to-end</h2>
              </div>
            </div>
          </header>
          <section role="region" aria-label="content-2" className={styles.projects}>
            <FilterableGrid items={projectsGridData}/>
          </section>
        </main>
      );
    };