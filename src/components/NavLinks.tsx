import { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineLineChart } from 'react-icons/ai';
import { PiCurrencyEthLight } from 'react-icons/pi';
import { BiNews } from 'react-icons/bi';
const NavLinks = ({ menuOpen }: { menuOpen: boolean }) => {
  const styles: CSSProperties = {
    backgroundColor: 'rgb(96, 165, 250)'
  }
  return (
    <nav className={`absolute md:static right-0 top-[100%]  md:bg-[unset] ${menuOpen || 'hidden'} bg-slate-900 md:w-full  md:block w-[35%]`}>
      <ul className='text-white'>
        <li>
          <NavLink to='/' className='flex items-center gap-4  py-3 px-4 hover:bg-blue-300 w-full' style={({ isActive }) => isActive ? styles : {}}>
          <AiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='currencies' className='flex items-center gap-4  py-3 px-4 hover:bg-blue-300 w-full' style={({ isActive }) => isActive ? styles : {}}>
            <AiOutlineLineChart />
            <span>Currencies</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='exchanges' className='flex items-center gap-4 py-3 px-4 hover:bg-blue-300 w-full' style={({ isActive }) => isActive ? styles : {}}>
            <PiCurrencyEthLight />
            <span>Exchanges</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='news' className='flex items-center gap-4  py-3 px-4 hover:bg-blue-300 w-full' style={({ isActive }) => isActive ? styles : {}}>
            <BiNews />
            <span>News</span>
          </NavLink>
        </li>
      </ul>
  </nav>
  )
}

export default NavLinks