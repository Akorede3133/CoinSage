import GlobalStats from '../components/GlobalStats';
import Cryptos from '../components/Cryptos';
const Home = () => {
  return (
    <main className='min-h-screen w-[90%] mx-auto py-5'>
    <GlobalStats />
    <Cryptos />
    </main>
  )
}

export default Home