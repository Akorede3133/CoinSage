import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='md:grid grid-cols-[20%,80%] bg-violet-50'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout