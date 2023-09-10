const Details = () => {
  return (
    <section className=" min-h-screen w-[85%] mx-auto">
      <article className="border-b py-5 border-gray-400">
        <h2 className=" text-blue-600 text-3xl text-center py-10">Bitcoin (BTC) Price</h2>
        <p className="text-center">Bitcoin live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </article>
      <select name="" id="" className="w-[200px] cursor-pointer outline-blue-300 p-1 mt-5 border hover:border-blue-400 rounded-md">
        <option value="3h">3h</option>
        <option value="3h">3h</option>
        <option value="3h">3h</option>
        <option value="3h">3h</option>
        <option value="3h">3h</option>
        <option value="3h">3h</option>
        <option value="3h">3h</option>
      </select>
      <section className="md:grid grid-cols-2">
        <article>
          <h3 className=" text-2xl text-blue-400 pt-4">Bitcoin Value Statistics</h3>
          <p className="py-4">An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</p>
          <ul>
            <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
              <p>Price to USD</p>
              <p className=" font-bold">$ 26K</p>
            </li>
            <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
              <p># Rank</p>
              <p className=" font-bold">1</p>
            </li>
            <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
              <p>24h Volume</p>
              <p className=" font-bold">$ 26K</p>
            </li>
            <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
              <p>Market Cap</p>
              <p className=" font-bold">$ 506.8B</p>
            </li>
            <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
              <p>All-time-high(daily avg.)</p>
              <p className=" font-bold">$ 68.8k</p>
            </li>
          </ul>
        </article>
        <article>
        <h3 className=" text-2xl text-blue-400 pt-4">Other Stats Info</h3>
            <p className="py-4">An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</p>
            <ul>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Number Of Markets</p>
                <p className=" font-bold">3415</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Number of Exchanges</p>
                <p className=" font-bold">119</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Approved Supply</p>
                <p className=" font-bold">$ 26K</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Total Supply</p>
                <p className=" font-bold">$ 506.8B</p>
              </li>
              <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
                <p>Circulating Supply</p>
                <p className=" font-bold">$ 68.8k</p>
              </li>
            </ul>
        </article>
      </section>
      <section className="mt-4 md:grid grid-cols-2">
        <article>
        <h2 className=" text-blue-600 text-3xl py-4">What is Bitcoin?</h2>
        <p>Bitcoin is a digital currency with a finite supply, allowing users to send/receive money without a central bank/government, often nicknamed "Digital Gold".</p>
        </article>
        <article>
        <h3 className=" text-2xl text-blue-400 pt-4">Bitcoin Links</h3>
        <ul>
          <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
            <p>Website</p>
            <p className=" font-bold">3415</p>
          </li>
          <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
            <p>Website</p>
            <p className=" font-bold">119</p>
          </li>
          <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
            <p>Approved Supply</p>
            <p className=" font-bold">$ 26K</p>
          </li>
          <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
            <p>Total Supply</p>
            <p className=" font-bold">$ 506.8B</p>
          </li>
          <li className="flex justify-between border-b border-b-slate-300 py-4 px-6">
            <p>Circulating Supply</p>
            <p className=" font-bold">$ 68.8k</p>
          </li>
        </ul>
      </article>
      </section>
      
    </section>
  )
}

export default Details