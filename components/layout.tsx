import Link from 'next/link';

import styles from './styles/NavBar.module.css';


const NavBar = () => {
  return (
    <>
      <h1>kienan</h1>
      <nav className={styles.nav}>
          <Link href="/"><a>home</a></Link>
          <Link href="/blog"><a>blog</a></Link>
          <Link href="/about"><a>about</a></Link>
          <Link href="/dont"><a>contact</a></Link>
      </nav>
    </>
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
    <div className='mainColumnContent'>
      {children}
    </div>
  </>);
};
    
export default Layout;