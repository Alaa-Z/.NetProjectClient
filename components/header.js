import Nav from './nav';
import HeaderImg from './headerImg';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();

  return (
    <>
    <Nav/>
    {/* Render the HeaderImg only in Homepage */}
    {router.pathname === '/' && <HeaderImg />}
  </>
  )
}

export default Header;
