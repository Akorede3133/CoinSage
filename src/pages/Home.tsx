import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen w-[95%] mx-auto py-5'>
      <section>
        <h2 className=' text-4xl'>Global Crypto Stats</h2>
        <ul className='grid gap-12 grid-cols-2 pt-5'>
          <li className='grid gap-1'>
            <p className=' text-gray-500'>Total Cryptocurrencies</p>
            <h4 className=' text-2xl'>29,521</h4>
          </li>
          <li className='grid gap-1'>
            <p className=' text-gray-500'>Total Cryptocurrencies</p>
            <h4 className=' text-2xl'>29,521</h4>
          </li>
          <li className='grid gap-1'>
            <p className=' text-gray-500'>Total Cryptocurrencies</p>
            <h4 className=' text-2xl'>29,521</h4>
          </li>
          <li className='grid gap-1'>
            <p className=' text-gray-500'>Total Cryptocurrencies</p>
            <h4 className=' text-2xl'>29,521</h4>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home