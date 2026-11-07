import styles from './Footer.module.scss';

const Footer = () => {
  return <footer className={styles.footer}>
    <span>kienankb @ [</span>
    <span><a target='_blank' rel='noopener noreferrer' href="https://github.com/kienankb">github</a>,</span>
    <span><a target='_blank' rel='noopener noreferrer' href="https://bsky.app/profile/kienankb.bsky.social">bsky</a>,</span>
    <span><a target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/kienankb">linkedin</a></span>
    <span>];</span>
    <span>mailto: kienan@<em>this-domain</em></span>
  </footer>
};

export default Footer;
