import Link from 'next/link';
import styles from './NavBar.module.css'; // You can create a separate CSS module for styling

const Nav: React.FC = () => {
  return (
    <div className="nav-wrapper">
        <nav className="nav">
            <div className="blur-bg"></div>
            <ul className="nav-list">
            <li>
          <Link href="/">
            <div id="home-icon">
              <img src="img/icons/home-24px.svg" alt="home" />
              <span className="circle-bg"></span>
              <span className="nav-caption--spring">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div id="work-icon">
              <img src="img/icons/apps-24px.svg" alt="work" />
              <span className="circle-bg"></span>
              <span className="nav-caption--spring">Work</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/bio">
            <div id="bio-icon">
              <img src="img/icons/account_circle-24px.svg" alt="about" />
              <span className="circle-bg"></span>
              <span className="nav-caption--spring">Bio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <div id="outreach-icon">
              <img src="img/icons/alternate_email-24px.svg" alt="contact" />
              <span className="circle-bg"></span>
              <span className="nav-caption--spring">Contact</span>
            </div>
          </Link>
        </li>
            </ul>
            <div className="blur-bg"></div>
        </nav>
    </div>
  );
};

export default Nav;