import background from '../../../assets/background.jpg'
const OneStopCare = () => {
  return (
    <div  className="w-full min-h-screen  bg-center flex  flex-col items-center justify-center" style={{backgroundImage:`url(${background})`}}>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-10'>
   <h1 className=' text-5xl lg:text-6xl font-bold font-Nunito text-center'>Call us Now: <span className='text-accent'> +234 813 866 2406</span> </h1>
       <h2 className=' text-2xl lg:text-4xl text-gray-700 text-center'>we are available 24/7 anywhere you want</h2>
        </div>
    </div>
  )
}

export default OneStopCare