import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { newsProp } from '../interface';
import { getNews } from '../features/news/newsSlice';
import NewsCard from '../components/NewsCard'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';

const News = () => {
  const { news, loading, error } = useAppSelector((state) => state.news);
  const { coins } = useAppSelector((state) => state.coins);
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    // dispatch(getNews({count: 13, query: 'cryptocurrency'}));
  }, [])
  if (loading) {
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
            className='border-0 bg-transparent outline-none w-[100%]'
            placeholder='Select a crypto'
          />
          <div>
            <AiOutlineSearch className="hidden" />
            <RiArrowDropDownLine className="text-3xl text-slate-400" />
          </div>
        </div>
        <ul className='bg-white grid gap-2 w-[200px] rounded-md mt-1 py-3 h-[200px] overflow-auto'>
          {
            coins.map((coin) => (<li className='hover:bg-slate-300 px-4 cursor-pointer'>{coin.name}</li>))
          }
          
        </ul>
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