import GlobalStats from '../components/GlobalStats';
import Cryptos from '../components/Cryptos';
import HomeNews from '../components/HomeNews';
import { useAppSelector } from '../app/hooks';
const Home = () => {
  const { loading, error } = useAppSelector((state) => state.coins);

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