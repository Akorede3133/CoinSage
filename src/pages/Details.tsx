import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getCoin, getHistory } from '../features/coins/coinsSlice';
import LineChart from '../components/LineChart';
import {FaRankingStar} from 'react-icons/fa6';
import {BsCurrencyExchange, BsSpeedometer2} from 'react-icons/bs'
import {SiCoinmarketcap} from 'react-icons/si';
import {GiPodiumWinner} from 'react-icons/gi';
import {AiFillAlipayCircle, AiOutlineBarChart, AiOutlineCheck} from 'react-icons/ai';
import {PiWarningCircleLight} from 'react-icons/pi';
import millify from 'millify';

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleCoin, singleCoinLoading, error } = useAppSelector((state) => state.coins);
  const [period, setPeriod] = useState<string>('24h');
  
  useEffect(() => {
    if (id) {
      dispatch(getCoin(id))
      dispatch(getHistory({id, period}))
    }
  }, [id, dispatch, period]);
  if (singleCoinLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>error</h2>
  }
  const periods = ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
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
      value: <AiOutlineCheck />,
      icon: <PiWarningCircleLight /> 
    },
    {
      name: 'Total Supply', 
      value: millify(+singleCoin?.supply?.total),
      icon: <PiWarningCircleLight /> 
    },
    {
      name: 'Circulating Supply', 
      value: millify(+singleCoin?.supply?.circulating),
      icon: <PiWarningCircleLight /> 
    },

  ]
  
  return (
    <section className=" min-h-screen w-[85%] md:w-[90%] mx-auto my-10">
      <article className="border-b pb-5 border-gray-400">
        <h2 className=" text-blue-600 text-3xl text-center pb-6">{singleCoin?.name} (BTC) Price</h2>
        <p className="">{singleCoin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </article>
      <select name="" 
        id=""
        className="w-[200px] cursor-pointer outline-blue-300 p-1 mt-5 border hover:border-blue-400 rounded-md"
        value={period}
        onChange={(e : React.ChangeEvent<HTMLSelectElement>)=> setPeriod(e.target.value)}
        >
        {
          periods.map((period) => (
            <option 
              key={period}
              value={period}
            >{period}</option>
          ))
        }
      </select>
      <LineChart name={singleCoin?.name} price={singleCoin?.price} />
      <section className="md:grid  gap-10 grid-cols-2">
        <article>
          <h3 className=" text-2xl text-blue-400 pt-4">{singleCoin?.name} Value Statistics</h3>
          <p className="py-4">An overview showing the statistics of {singleCoin?.name}, such as the base and quote currency, the rank, and trading volume.</p>
          <ul>
            {
              coinStats.map((coin, index) => (
                <li key={index} className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                  <p className='flex gap-2 items-center'>{coin.icon}{coin.name}</p>
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
              {
                otherStats.map((coin, index) => (
                  <li key={index} className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                    <p className='flex gap-2 items-center'>{coin.icon}{coin.name}</p>
                    <p className=" font-bold">{coin.value}</p>
                  </li>
                ))
              }
            </ul>
        </article>
      </section>
      <section className="mt-4 md:grid gap-4 grid-cols-2">
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
                <p className='capitalize font-medium'>{link.type}</p>
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