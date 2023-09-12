import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { coinProp, newsProp } from '../interface';
import { getNews } from '../features/news/newsSlice';
import NewsCard from '../components/NewsCard'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';
import { getCoins } from '../features/coins/coinsSlice';

const News = () => {
  const { news, loading, error } = useAppSelector((state) => state.news);
  const { coins, loading: coinLoading } = useAppSelector((state) => state.coins);
  const [searchedCoins, setSearchedCoins] = useState<coinProp[]>(coins)
  const [search, setSearch] = useState<string>('');
  const [showList, setShowList] = useState(false);
  const [placeholder, setPlaceholder] = useState('select a crypto');
  const displayedCoins = search ? searchedCoins : coins;
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    const newVal = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    setSearchedCoins(newVal)
  }, [search])
  useEffect(() => {
    dispatch(getCoins(100));
    dispatch(getNews({count: 13, query: placeholder}));
  }, [placeholder, dispatch])
  const handleClick = (value: string) => {
    setSearch('');
    setPlaceholder(value)
    setShowList(false)
    setSearchedCoins(coins)
  }
  if (loading && coinLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }
  return (
    <section className='min-h-screen w-[93%] mx-auto my-5'>
      <article>
        <div className='flex rounded-md bg-white justify-between items-center border w-[200px] py-1 px-4 '>
          <input 
            type="text" 
            name="" 
            id="" 
            value={search}
            className='border-0 bg-transparent outline-none w-[100%]'
            placeholder={placeholder}
            onClick={() => setShowList(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            { showList ? <AiOutlineSearch className=" text-slate-400" />
            : <RiArrowDropDownLine className="text-3xl text-slate-400" /> }
          </div>
        </div>
        { showList &&
          <ul className='bg-white grid  w-[200px] rounded-md mt-1 py-3  max-h-[200px] overflow-auto shadow-md'>
          {
            searchedCoins.length == 0 && search ? <p className='px-4'>No data</p>
            : displayedCoins.map((coin) => (<li key={coin.uuid}className={`hover:bg-slate-200 px-4 py-2 cursor-pointer rounded ${placeholder === coin.name && 'bg-blue-400'}`} onClick={() => handleClick(coin.name)}>{coin.name}</li>))
          }
          
        </ul>
        }
      </article>
      <ul className='mt-5 grid gap-8 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
      {
          news.map((news: newsProp, index) => {
            const { description, image, provider, url, datePublished, name } = news;
            return (
              <NewsCard 
              key={index} 
              description={description}
              image={image} 
              provider={provider}
              url={url}
              datePublished={datePublished}
              name={name}
            />
            )
          })
        }
      </ul>
    </section>
  )
}

export default News