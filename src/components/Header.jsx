import Logo from './Logo';

import styles from './Header.module.scss';

const Header = () => {
  return <header className={styles.header}>
    <nav style={{flex: 1}}>
      <span>kienan</span>
    </nav>
    <Logo/>
  </header>;
};

export default Header;
