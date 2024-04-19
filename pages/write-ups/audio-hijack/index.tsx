import writeUp from "../../../components/WriteUp/WriteUp"
import WriteUpHeader from "../../../components/WriteUp/WriteUpHeader";
import styles from '../../../styles/scss/WriteUp.module.scss'; 


// TODO: Add share sheet component
function AudioHijack() {
  return(
    <div>

      <WriteUpHeader
        title="Prototyping a mixed reality music player"
        category="Mixed Reality (AR/VR)"
        description="'Audio Hijack' is a prototype built with Unity, envisioning what the future of wearables and music listening can look like in mixed reality"
        backgroundColor="hotpink"
      ></WriteUpHeader>

        <p><b>What if we can vi</b></p>
        <div className={styles['write-up-img']}>
        <img src='/img/artwork/bk_night.webp'></img>
        <span className={styles['write-up-img--caption']}>Test caption</span> 
        </div>

    </div>
  )
};

export default writeUp(AudioHijack)


/*

      <div className={styles['write-up-coverimg']} style={{ backgroundImage: `url('/img/artwork/bk_night.webp')`}}>
        </div>
*/