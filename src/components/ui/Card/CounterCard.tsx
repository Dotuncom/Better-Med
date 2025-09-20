import CountUp from 'react-countup'
import backgroundImage from '../../../assets/p10-300x300.jpg'
import { useInView } from 'react-intersection-observer'


type CounterCardProps ={
    end:number,
    title:string,
    suffix:string
}
const CounterCard = ({end, title,suffix}:CounterCardProps) => {
    const  {ref,inView} = useInView({
        triggerOnce:false,
        threshold:0.5
    })
  return (
    <div
    
    ref={ref}
     className="relative w-[300px] h-40 rounded-2xl hover:-translate-y-5 overflow-hidden bg-repeat-none flex flex-col items-center justify-center " style={{backgroundImage:`url(${backgroundImage}) `, backgroundRepeat:'none'}} >
<div className='absolute inset-0 bg-accent/80'></div>
      <h1 className='text-5xl z-90 font-Nunito text-white font-semi-bold'>{inView ?<CountUp end={end} duration={3}/>:0}<span>{suffix}</span></h1>
      <h4 className='text-2xl z-90 font-Nunito text-white font-bold'>{title}</h4>
    </div>
  )
}

export default CounterCard