import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getNews } from '../features/news/newsSlice';
import { getCoins } from '../features/coins/coinsSlice';
import GlobalStats from '../components/GlobalStats';
import Cryptos from '../components/Cryptos';
import HomeNews from '../components/HomeNews';
const Home = () => {
  const { loading, error } = useAppSelector((state) => state.coins);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoins(10))
    dispatch(getNews({count: 7, query: 'cryptocurrency'}));
  }, [])
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>error</h2>
  }
  return (
    <main className='min-h-screen w-[93%] mx-auto py-5'>
    <GlobalStats />
    <Cryptos />
    <HomeNews />
    </main>
  )
}

export default Home