import {useState, useEffect } from "react";
import { Link } from "react-router-dom"
import CryptoCard from "../components/CryptoCard"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCoins, searchCoins } from "../features/coins/coinsSlice";
import { coinProp } from "../interface";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Currencies = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(searchCoins(e.target.value))
  }
  const {coins, searchedCoins, loading, error} = useAppSelector((state) => state.coins);

  const displayedCoins = search ? searchedCoins : coins;
  useEffect(() => {
    dispatch(getCoins(100))
   }, [dispatch])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
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
        value={search}
        onChange={handleChange}
        />
      </div>
      <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
      {
        displayedCoins.length === 0 && search ? <h2>No match found...</h2>
        : displayedCoins.map((coin: coinProp) => {
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