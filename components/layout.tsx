import Link from 'next/link';


const NavBar = () => {
  return (
    <>
      <div className='nav'>
        <Link href="/">home</Link>
      </div>
      <div className='nav'>
        <Link href="/blog">blog</Link>
      </div>
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
    <div>
      {children}
    </div>
  </>);
};
    
export default Layout;