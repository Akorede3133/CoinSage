const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=' bg-slate-900 p-7 text-white flex flex-col items-center'>
      <p>Copyright &copy; {year} <a href="#">CoinSage Inc.</a></p>
      <p>All Rights Reserved.</p>
    </div>
  )
}

export default Footer