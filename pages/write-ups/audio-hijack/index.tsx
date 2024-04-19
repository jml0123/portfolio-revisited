import writeUp from "../write-up"
import styles from '../../../styles/scss/WriteUp.module.scss'; 

function AudioHijack() {
  return(
    <div>
        <h1>Audio Hijack</h1>
        <h2>Lorem Ipsum</h2>
        <div className={styles['write-up-coverimg']} style={{ backgroundImage: `url('/img/artwork/bk_night.webp')`}}></div>
        <p>Lorem Ipsum dolor...</p>
        <div className={styles['write-up-img']}>
        <img src='/img/artwork/bk_night.webp'></img>
        <span className={styles['write-up-img--caption']}>Test caption</span> 
        </div>

    </div>
  )
};

export default writeUp(AudioHijack)