import { newsProp } from '../interface';
import moment from 'moment';

const NewsCard = ({ description, name, url, image, provider,datePublished }: newsProp) => {
  // const {loading} = useAppSelector((state) => state.news)
  const newsImg = image?.thumbnail?.contentUrl;
  const providerName = provider[0]?.name
  const providerImg = provider[0]?.image?.thumbnail?.contentUrl;
  const defaultImg = 'https://www.bing.com/th?id=OVFT.0Nn2k-KldJKOsUdDrNRDKC&pid=News'
  const currentTime = moment();
  const pastTime = moment(datePublished);

  const timeAgo = pastTime.from(currentTime);

  
  return (
    <li className='bg-white p-6 shadow-md rounded-md'>
      <a href={url} className='flex flex-col justify-between'>
       <div>
        <section className=' flex justify-between'>
            <h4 className=' text-xl font-medium'>{name}</h4>
            <img src={newsImg ? newsImg : defaultImg} alt="" className='w-[150px] h-[100px] object-cover border'/>
        </section>
        <p 
          className='tracking-wide'>{description.length > 200 ? `${description.slice(0, 100)}...` : description}
        </p>
       </div>
        <footer 
          className='flex justify-between items-center'>
          <div className='flex gap-2 items-center mt-4'>
            <img src={providerImg ? providerImg : defaultImg} alt="" className='w-[40px] h-[40px] object-cover rounded-full'/>
            <p>{providerName}</p>
          </div>
          <p className='mt-4'>{timeAgo}</p>
        </footer>
      </a>
    </li>
  )
}

export default NewsCard