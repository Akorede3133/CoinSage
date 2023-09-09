import { Link } from 'react-router-dom';
import CryptoCard from './CryptoCard';

const Cryptos = () => {
  return (
    <section className='mt-10'>
    <article className='flex justify-between gap-4'>
    <h3 className='text-2xl'>Top 10 Cryptos In the World</h3>
    <Link to='currencies' className=' text-blue-600 text-2xl font-medium'>
     Show more
    </Link>
    </article>
    <ul className='mt-4 grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]'>
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
    </ul>
   </section>
  )
}

export default Cryptos