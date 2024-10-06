import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/assets/hero-img.png";
import themeIcon from "../../assets/assets/sun.svg";
import twitterIcon from "../../assets/assets/twitter-light.svg";
import githubIcon from '../../assets/assets/github-light.svg';
import linkedinIcon from '../../assets/assets/linkedin-light.svg';
import sun from '../../assets/assets/sun.svg'
import moon from '../../assets/assets/moon.svg'
import twitterDark from '../../assets/assets/twitter-dark.svg'
import twitterLight from '../../assets/assets/twitter-light.svg'
import githubDark from '../../assets/assets/github-dark.svg'
import githubLight from '../../assets/assets/github-light.svg'
import linkedinLight from '../../assets/assets/linkedin-light.svg'
import linkedinDark from '../../assets/assets/linkedin-dark.svg'
import CV from '../../assets/assets/cv.pdf'
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const {theme, toggleTheme} = useTheme()

  const themeIcon = theme === 'light' ? sun : moon ;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark ;
  const githubIcon = theme === 'light' ? githubLight : githubDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Imran Shaikh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme
          }
        />
      </div>

      <div className={styles.info}>
        <h1>
          Imran <br />
          Shaikh
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://x.com/imran07sks?t=_3W82YBB1g6brPiKfmfQbQ&s=08 "
            target="_blank">
            <img src={twitterIcon} alt="Twitter Logo" />
          </a>
          <a
            href="https://github.com/imran07sks"
            target="_blank">
            <img src={githubIcon} alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/imran-shaikh-159b8a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  "
            target="_blank">
            <img src={linkedinIcon} alt="Linkedin Logo" />
          </a>
        </span>
        <p className={styles.discretion}>
          with passion for developing modern React web apps.
        </p>
        <a href={CV} download>
          <button className='hover' >Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
