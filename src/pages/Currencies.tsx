import { useEffect } from "react";
import { Link } from "react-router-dom"
import CryptoCard from "../components/CryptoCard"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCoins } from "../features/coins/coinsSlice";
import { coinProp } from "../interface";
const Currencies = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoins(100))
   }, [])
  const {coins, loading} = useAppSelector((state) => state.coins);

  if (loading) {
    return <h2>Loading...</h2>
  }
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
      {
        coins.map((coin: coinProp) => {
          const { uuid: id, change, price, rank, marketCap, iconUrl, name} = coin;          
          return (
            <Link to={`${id}`} key={id}>
              <CryptoCard change={change} price={price} rank={rank} marketCap={marketCap} iconUrl={iconUrl} name={name} />
            </Link>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Currencies