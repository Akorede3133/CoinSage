import NewsCard from '../components/NewsCard'

const News = () => {
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
        <NewsCard />
        <NewsCard />
        <NewsCard />
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

export default News