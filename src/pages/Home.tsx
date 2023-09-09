import GlobalStats from '../components/GlobalStats';
import Cryptos from '../components/Cryptos';
import HomeNews from '../components/HomeNews';
const Home = () => {
  return (
    <main className='min-h-screen w-[93%] mx-auto py-5'>
    <GlobalStats />
    <Cryptos />
    <HomeNews />
    </main>
  )
}

export default Home