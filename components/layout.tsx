import Link from 'next/link';

import styles from './styles/NavBar.module.css';


const NavBar = () => {
  return (
    <header className={styles.header}>
      <h1>kienan</h1>
      <nav className={styles.nav}>
          <Link href="/"><a>home</a></Link>
          <Link href="https://twitter.com/kienankb">twitter</Link>
          <Link href="/datajournal/">data journal</Link>
      </nav>
    </header>
  );
}
  
type LayoutProps = {
  children: JSX.Element,
};

// note: it is the responsibility of `children` to include a
//  <Head> tag to properly set metadata

const Layout = ({children}: LayoutProps) => {
  return (<>
    <NavBar />
    <main>
      <div className='mainColumnContent'>
        {children}
      </div>
    </main>
  </>);
};
    
export default Layout;