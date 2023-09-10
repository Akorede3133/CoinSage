import img from '../assets/coin-logo.png'
const CryptoCard = () => {
  return (
    <li className='shadow-md bg-white rounded-md pt-6'>
      <section className='border-b px-4 border-slate-300 flex justify-between items-center'>
        <article className='flex items-center gap-2'>
          <span>1.</span>
          <h4>Bitcoin</h4>
        </article>
        <img src={img} alt="" className='w-[35px]'/>
      </section>
      <ul className='py-6 px-4'>
        <li>
          <span>Price: 1.6k</span>
        </li>
        <li><span>Market Cap: 200.5B</span></li>
        <li>
          <span>Daily Change: 0.85%</span>
        </li>
      </ul>
    </li>
  )
}

export default CryptoCard