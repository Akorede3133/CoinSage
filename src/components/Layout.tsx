import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='bg-violet-50'>
      <NavBar />
      <div className='md:absolute md:w-[80%] md:left-[20%]'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout