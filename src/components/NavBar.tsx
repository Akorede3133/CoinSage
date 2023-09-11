import { AiOutlineMenuUnfold } from 'react-icons/ai';
import coin from '../assets/coin-logo.png';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <header className='bg-slate-900 relative md:fixed xl:w-[20%] md:w-[30%] left-0 flex md:block justify-between items-center md:min-h-screen md:p-0 px-4'>
      <section className='flex gap-4 items-center  text-white'>
      <img src={coin} alt="" className='w-[70px] mt-3'/>
      <h1 className='text-2xl'>CoinSage</h1>
      </section>
      <NavLinks />
      <div className='md:hidden'>
        <AiOutlineMenuUnfold className=' text-white text-3xl' />
      </div>
    </header>
  )
}

export default NavBar