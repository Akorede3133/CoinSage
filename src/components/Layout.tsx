import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='md:grid grid-cols-[20%,80%]'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout