import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { newsProp } from '../interface';
import NewsCard from './NewsCard'
const HomeNews = () => {
  const { news, error } = useAppSelector((state) => state.news);
  if (error) {
    return <p>An error ocurred</p>
  }
  
  if (!Array.isArray(news)) {
    return null;
  }
  
  return (
    <section className='mt-10'>
      <article className='flex justify-between gap-4'>
      <h3 className='text-2xl'>Latest Crypto News</h3>
      <Link to='news' className=' text-blue-600 text-2xl font-medium'>
      Show more
      </Link>
      </article>
      <ul className='mt-4 grid gap-3 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {
          news && news.map((news: newsProp, index) => {
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

export default HomeNews