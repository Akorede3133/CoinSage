import { useAppSelector } from "../app/hooks";
import millify from "millify";

const GlobalStats = () => {
  const { globalStats: { totalCoins, totalExchanges, totalMarketCap, total24hVolume, totalMarkets } } = useAppSelector((state) => state.coins);
  
  return (
    <section>
      <h2 className=' text-4xl'>Global Crypto Stats</h2>
      <ul className='grid gap-12 grid-cols-2 pt-5'>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total Cryptocurrencies</p>
          <h4 className=' text-2xl'>{millify(totalCoins)}</h4>
        </li>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total Exchanges</p>
          <h4 className=' text-2xl'>{totalExchanges}</h4>
        </li>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total Market Cap</p>
          <h4 className=' text-2xl'>{millify(+totalMarketCap)}</h4>
        </li>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total 24h Volume</p>
          <h4 className=' text-2xl'>${millify(+total24hVolume)}</h4>
        </li>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total Markets</p>
          <h4 className=' text-2xl'>{millify(totalMarkets)}</h4>
        </li>
        <li className='grid gap-1'>
          <p className=' text-gray-500'>Total Coins</p>
          <h4 className=' text-2xl'>{millify(totalCoins)}</h4>
        </li>
      </ul>
    </section>
  )
}

export default GlobalStats