import img from '../assets/coin-logo.png';

const NewsCard = () => {
  return (
    <li className='bg-white p-6 shadow-md rounded-md'>
      <a href="">
        <section className=' flex justify-between'>
          <h4 className=' text-xl font-medium'>Exploring The Potential of solar-powered crytocurrency minning</h4>
          <img src={img} alt="" className='w-[150px] border'/>
        </section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus vel assumenda vero repudiandae asperiores veniam nihil adipisci nemo vitae.</p>
        <footer className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src={img} alt="" className='w-[50px]'/>
            <p>MENA FN</p>
          </div>
          <p>23 minutes ago</p>
        </footer>
      </a>
    </li>
  )
}

export default NewsCard