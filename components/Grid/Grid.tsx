import { useEffect } from 'react';
import styles from '../../styles/scss/Grid.module.scss';
import sharedStyles from '../../styles/scss/Shared.module.scss';
import { GridItemData } from './Grid.types';
import { useSpring, animated } from '@react-spring/web';
const defaultImgPath = 'img/projects/default.webp';

export const Grid: React.FC<{items: GridItemData[]}> = ({items}) => {
    return(
        <div className={styles['grid-wrapper']}>
          <div className={styles['grid']}>
            {/* SPECIAL GRID ITEM */}
            <a href="mailto:jsmglorenzo@gmail.com" target="_blank" className={styles['grid-contact-link']}>
              <div className={`${styles['grid-item']} ${styles['grid-item']} ${styles['blank-work']}`}>
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
  const gridAreaStyles = index % 2 === 0 ? 'span 2 / span 1' : 'span 2 / span 2';

  const [props ] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300, friction: 10 },
  }));

  const animatedStyles = {
    ...props,
    gridArea: gridAreaStyles,
  }

  return (
    <animated.div style={animatedStyles} className={`${styles['grid-item']}`} >
      <div className={styles['grid-item-container']}>
        <div className={sharedStyles["img-mask"]}></div>
        <img src={data.imageUrl ? data.imageUrl : defaultImgPath} alt={data.title + " Preview"}/>
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
                    {data.liveUrl && <a className={styles["live"]} target="_blank" href={data.liveUrl}>Live</a>}
                    {data.repoUrl && <a className={styles["repo"]} target="_blank" href={data.repoUrl}>Repo</a>}
                    {data.previewUrl && <a className={styles["preview"]} target="_blank" href={data.previewUrl}>Preview</a>}
                </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
