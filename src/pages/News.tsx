import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { newsProp } from '../interface';
import { getNews } from '../features/news/newsSlice';
import NewsCard from '../components/NewsCard'

const News = () => {
  const { news, loading, error } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  console.log(news);
  
  useEffect(() => {
    dispatch(getNews({count: 13, query: 'cryptocurrency'}));
  }, [])
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }
  return (
    <section className='min-h-screen w-[93%] mx-auto my-5'>
      <div>
        <select name="" id="" placeholder='select a crypto' className="w-[200px] cursor-pointer outline-blue-300 p-1 mt-5 border hover:border-blue-400 rounded-md">
          <option value="3h">3h</option>
          <option value="3h">3h</option>
          <option value="3h">3h</option>
          <option value="3h">3h</option>
          <option value="3h">3h</option>
          <option value="3h">3h</option>
          <option value="3h">3h</option>
        </select>
      </div>
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