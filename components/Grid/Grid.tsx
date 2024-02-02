import styles from '../../styles/scss/Grid.module.scss';
import { GridItemData } from './Grid.types';


export const Grid: React.FC<{items: GridItemData[]}> = ({items}) => {
    return(
        <div className={styles['grid-wrapper']}>
          <div className={styles['grid']}>
            {/* SPECIAL GRID ITEM */}
            <a href="contact.html" className={styles['grid-contact-link']}>
              <div className={`${styles['grid-item']} ${styles['grid-item--10']} ${styles['blank-work']}`}>
                <div className={styles['grid-item-container']}>
                  <div className={styles['grid-contact']}>
                    <p>Let's work on the next thing together</p>
                  </div>
                  <div className={styles['wrapper']}>
                    {/*TODO: dynamically populate this with javascript, but still use CSS animations for confetti*/}
                      <div className={styles['confetti-50']}></div>
                      <div className={styles['confetti-49']}></div>
                      <div className={styles['confetti-48']}></div>
                      {/* ... Repeat for other confetti elements */}
                      <div className={styles['confetti-0']}></div>
                  </div>
                </div>
              </div>
            </a>
            {/* END SPECIAL GRID ITEM */}
            {items.map((itemData, i) => <GridItem data={itemData} index={items.length - (i)}/>)}
          </div>
      </div>
    )
}


export const GridItem: React.FC<{ data: GridItemData, index: number }> = ({ data, index }) => {
return(
    <div className={`${styles['grid-item']} ${styles[`grid-item--${index}`]}`}>
      {index}
      <div className={styles['grid-item-container']}>
        <div className={styles["img-mask"]}></div>
        <img src={data.imageUrl} alt={data.title + " Preview"}/>
        <div className={styles["info-wrapper"]}>
          <div className={styles["header-wrapper"]}>
            <h3>{data.title}</h3>
            <p className={`${styles["details"]} ${styles["label"]} ${styles["label-tech"]}`}>{data.tech.join(", ")}</p>
          </div>
          <div className={styles["description-wrapper"]}>
            <div className={styles["description-container"]}>
                <p>
                   {data.description}
                </p>
                <div className={`${styles["links-wrapper"]} ${styles["links-wrapper--grid"]}`}>
                    <a className={styles["live"]} target="_blank" href={data.liveUrl}>Live</a>
                    <a className={styles["repo"]} target="_blank" href={data.repoUrl}>Repo</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
