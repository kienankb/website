import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div>
        <Link href="/">home</Link>
      </div>
      <div>
        <Link href="/blog">blog</Link>
      </div>
    </>
  );
}
  
type LayoutProps = {
  children: JSX.Element,
};

const Layout = ({children}: LayoutProps) => {
  return (<>
    <NavBar />
    {children}
  </>);
};
    
export default Layout;