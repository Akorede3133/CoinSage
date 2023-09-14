import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getNews } from '../features/news/newsSlice';
import { getCoins } from '../features/coins/coinsSlice';
import GlobalStats from '../components/GlobalStats';
import Cryptos from '../components/Cryptos';
import HomeNews from '../components/HomeNews';
import Loading from '../components/Loading';
import Error from '../components/Error';
const Home = () => {
  const { loading, error } = useAppSelector((state) => state.coins);
  const { loading: newsLoading, error: newsError } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoins(10))
    dispatch(getNews({count: 7, query: 'cryptocurrency'}));
  }, [])
  if (loading && newsLoading) {
    return <Loading />
  }
  if (error || newsError) {
    return <Error />
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