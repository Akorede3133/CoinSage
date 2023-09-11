import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import CryptoCard from './CryptoCard';
import { coinProp } from '../interface';
const Cryptos = () => {
  const { coins } = useAppSelector((state) => state.coins)
  console.log(coins);
  
  return (
    <section className='mt-10'>
    <article className='flex justify-between gap-4'>
    <h3 className='text-2xl'>Top 10 Cryptos In the World</h3>
    <Link to='currencies' className=' text-blue-600 text-2xl font-medium'>
     Show more
    </Link>
    </article>
    <ul className='mt-4 grid gap-8 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]'>
      {
        coins.map((coin: coinProp) => {
          const { uuid: id, change, price, rank, marketCap, iconUrl, name} = coin;          
          return (
            <Link to='currencies/2' key={id}>
              <CryptoCard change={change} price={price} rank={rank} marketCap={marketCap} iconUrl={iconUrl} name={name} />
            </Link>
          )
        })
      }
    </ul>
   </section>
  )
}

export default Cryptos