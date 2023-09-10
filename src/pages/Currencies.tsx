import { Link } from "react-router-dom"
import CryptoCard from "../components/CryptoCard"

const Currencies = () => {
  return (
    <div className="w-[93%] mx-auto my-10 min-h-screen">
      <div className="flex justify-center">
        <input 
        type="text" 
        name="currency"
        id=""
        placeholder="Search Currency..."
        className="px-4 py-1 rounded w-[250px] border hover:border-blue-500 outline-blue-400"
        />
      </div>
      <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
       <Link to='currencies/2'>
        <CryptoCard />
       </Link>
       <Link to='currencies/2'>
        <CryptoCard />
       </Link> <Link to='currencies/2'>
        <CryptoCard />
       </Link> <Link to='currencies/2'>
        <CryptoCard />
       </Link> <Link to='currencies/2'>
        <CryptoCard />
       </Link> <Link to='currencies/2'>
        <CryptoCard />
       </Link> <Link to='currencies/2'>
        <CryptoCard />
       </Link>
      </ul>
    </div>
  )
}

export default Currencies