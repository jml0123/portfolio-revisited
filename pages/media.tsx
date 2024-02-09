
import Embed from '../components/Media/Embed';
import { EmbedData, EmbedType } from '../components/Media/Media.types';
import styles from '../styles/scss/Media.module.scss'; 
import sharedStyles from '../styles/scss/Shared.module.scss'; 
import { mixEmbedData, productionEmbedData } from './data/media.data';

export default function MediaPage() {

  return (
    <main>
      <header aria-label="content-header">
        <div className={sharedStyles['content-heading-wrapper']}>
          <h1 className={`${sharedStyles['content-heading']} ${sharedStyles['content-heading--media']}`}>Media</h1>
          <div className={sharedStyles['content-subheading-wrapper']}>
            <h2 className={sharedStyles['content-subheading']}>Music and other works</h2>
          </div>
        </div>
      </header>
      <section role="region" aria-label="content-2" className={styles['media']}>
        <div className={styles['media-container']}>
            <div className={styles['media-group-wrapper']}>
        <div className={styles['media-heading-wrapper']}>
            <h1 className={styles['media-heading']}>MIX</h1>
            <div className={styles['media-heading-line']}>radio and live DJ sets</div>
        </div>

           {mixEmbedData.map(d => <Embed embedData={d}/>)}
           </div>

           <div className={styles['media-group-wrapper']}>

          <div className={styles['media-heading-wrapper']}>
            <h1 className={styles['media-heading']}>PRODUCTION</h1>
            <div className={styles['media-heading-line']}>production work + sound design</div>
            </div>
           {productionEmbedData.map(d => <Embed embedData={d}/>)}
           </div>
        </div>
      </section>
    </main>
  );
};
