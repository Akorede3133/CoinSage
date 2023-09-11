import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='bg-violet-50'>
      <NavBar />
      <div className='md:absolute xl:w-[80%] xl:left-[20%] md:w-[70%] md:left-[30%]'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout