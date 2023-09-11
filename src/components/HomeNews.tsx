import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'
const HomeNews = () => {
  return (
    <section className='mt-10'>
      <article className='flex justify-between gap-4'>
      <h3 className='text-2xl'>Latest Crypto News</h3>
      <Link to='currencies' className=' text-blue-600 text-2xl font-medium'>
      Show more
      </Link>
      </article>
      <ul className='mt-4 grid gap-3 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </section>
  )
}

export default HomeNews