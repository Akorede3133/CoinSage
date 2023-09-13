import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getCoin } from '../features/coins/coinsSlice';
import {FaRankingStar} from 'react-icons/fa6';
import {BsCurrencyExchange, BsSpeedometer2} from 'react-icons/bs'
import {SiCoinmarketcap} from 'react-icons/si';
import {GiPodiumWinner} from 'react-icons/gi';
import {AiFillAlipayCircle, AiOutlineBarChart} from 'react-icons/ai';
import {PiWarningCircleLight} from 'react-icons/pi';
import millify from 'millify';

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleCoin, loading } = useAppSelector((state) => state.coins);
  
  console.log(singleCoin);
  
  useEffect(() => {
    if (id) {
      dispatch(getCoin(id))
    }
  }, [dispatch, id]);
  if (loading) {
    return <h2>Loading...</h2>
  }
  const period = ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
 const coinStats = [
  {
    name: 'Price to USD', 
    value: singleCoin?.price,
    icon: <AiFillAlipayCircle />
  },
  {
    name: 'Rank', 
    value: singleCoin?.rank,
    icon: <FaRankingStar />
  },
  {
    name: '24h Volume', 
    value: singleCoin?.['24hVolume'],
    icon: <BsSpeedometer2 />
  },
  {
    name: 'Market Cap', 
    value: singleCoin?.marketCap,
    icon: <SiCoinmarketcap />
  },
  {
    name: 'All-time-high(daily avg.)', 
    value: singleCoin?.allTimeHigh?.price,
    icon: <GiPodiumWinner />
  },

];

const otherStats = [
  {
    name: 'Number of Markets', 
    value: singleCoin?.numberOfMarkets,
    icon: <AiOutlineBarChart />
  },
  {
    name: 'Number of Exchanges', 
    value: singleCoin?.numberOfExchanges,
    icon: <BsCurrencyExchange />
  },
  {
    name: 'Approved Supply', 
    value: singleCoin?.numberOfExchanges,
    icon: <PiWarningCircleLight /> 
  },
  {
    name: 'Total Supply', 
    value: singleCoin?.supply?.total,
    icon: <PiWarningCircleLight /> 
  },
  {
    name: 'Circulating Supply', 
    value: singleCoin?.supply?.circulating,
    icon: <PiWarningCircleLight /> 
  },

]

  return (
    <section className=" min-h-screen w-[85%] mx-auto">
      <article className="border-b py-5 border-gray-400">
        <h2 className=" text-blue-600 text-3xl text-center py-10">{singleCoin?.name} (BTC) Price</h2>
        <p className="text-center">{singleCoin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </article>
      <select name="" id="" className="w-[200px] cursor-pointer outline-blue-300 p-1 mt-5 border hover:border-blue-400 rounded-md">
        {
          period.map((period) => (
            <option value={period}>{period}</option>
          ))
        }
      </select>

      <section className="md:grid grid-cols-2">
        <article>
          <h3 className=" text-2xl text-blue-400 pt-4">Bitcoin Value Statistics</h3>
          <p className="py-4">An overview showing the statistics of {singleCoin?.name}, such as the base and quote currency, the rank, and trading volume.</p>
          <ul>
            {
              coinStats.map((coin) => (
                <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                  <p className='flex gap-2'>{coin.icon}{coin.name}</p>
                  <p className=" font-bold">{coin.name === 'Rank' || '$'} {millify(+coin.value)}</p>
                </li>
              ))
            }
          </ul>
        </article>
        <article>
        <h3 className=" text-2xl text-blue-400 pt-4">Other Stats Info</h3>
            <p className="py-4">An overview showing the statistics of {singleCoin?.name}, such as the base and quote currency, the rank, and trading volume.</p>
            <ul>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p><AiOutlineBarChart /> Number Of Markets</p>
                <p className=" font-bold">{singleCoin?.numberOfMarkets}</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p> <BsCurrencyExchange /> Number of Exchanges</p>
                <p className=" font-bold">{singleCoin?.numberOfExchanges}</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p><PiWarningCircleLight /> Approved Supply</p>
                <p className=" font-bold">$ 26K</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Total Supply</p>
                <p className=" font-bold">$ {millify(+singleCoin?.supply?.total)}</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Circulating Supply</p>
                <p className=" font-bold">$ {singleCoin?.supply?.circulating}</p>
              </li>
            </ul>
        </article>
      </section>
      <section className="mt-4 md:grid grid-cols-2">
        <article>
        <h2 className=" text-blue-600 text-3xl py-4">What is {singleCoin?.name}</h2>
        <p>{singleCoin?.description}</p>
        </article>
        <article>
        <h3 className=" text-2xl text-blue-400 pt-4">{singleCoin?.name} Links</h3>
        <ul>
          {
            singleCoin?.links.map((link, index) => (
              <li key={index} className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>{link.type}</p>
                <a href={link.url} className='font-bold text-blue-600'>{link.name}</a>
              </li>
            ))
          }
        
        </ul>
      </article>
      </section>
      
    </section>
  )
}

export default Details