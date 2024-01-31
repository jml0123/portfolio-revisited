import Link from 'next/link';
import styles from '../../styles/css/Nav.module.css';
import { VscRootFolder } from "react-icons/vsc";
import { MdContentCopy } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { MdNotes } from "react-icons/md";

const Nav: React.FC = () => {
  return (
    <div className={styles.navWrapper}>
        <nav className={styles.nav}>
            <div className={styles.blurBg}></div>
            <ul className={styles.navList}>
            <li>
       
          <Link href="/">
            <div className={styles['icon']}>
              <VscRootFolder className={styles['nav-icon']}/>
              <span className={styles['nav-caption--appear']}>/</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className={styles['icon']}>
              <MdContentCopy className={styles['nav-icon']}/>
              <span className={styles['nav-caption--appear']}>/projects</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/bio">
            <div className={styles['icon']}>
              <MdNotes className={styles['nav-icon']}/>
              <span className={styles['nav-caption--appear']}>/bio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <div className={styles['icon']}>
              <CiMusicNote1 className={styles['nav-icon']}/>
              <span className={styles['nav-caption--appear']}>/media</span>
            </div>
          </Link>
        </li>
            </ul>
            <div className={styles.blurBg}></div>
        </nav>
    </div>
  );
};

export default Nav;