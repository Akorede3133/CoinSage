import millify from "millify";
import { coinProp } from '../features/coins/coinsSlice'
const CryptoCard = ({price, marketCap, rank, iconUrl, name, change}: coinProp) => {
  return (
    <li className='shadow-md bg-white rounded-md'>
      <section className='border-b py-3 px-4 border-slate-300 flex justify-between items-center'>
        <article className='flex items-center gap-2'>
          <span>{rank}.</span>
          <h4>{name}</h4>
        </article>
        <img src={iconUrl} alt="" className='w-[35px] h-[35px] object-cover'/>
      </section>
      <ul className='py-6 px-4'>
        <li>
          <span>Price: ${millify(+price)}</span>
        </li>
        <li><span>Market Cap: {millify(+marketCap)}</span></li>
        <li>
          <span>Daily Change: {change}%</span>
        </li>
      </ul>
    </li>
  )
}

export default CryptoCard