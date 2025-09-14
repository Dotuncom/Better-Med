
// type InstitutionCardProps ={
//     title:string,
//     image:string,
// }
// {title,image}:InstitutionCardProps
import image from '../../../assets/p10-600x480.jpg'
const InstitutionCard = () => {
  return (
    <div className='w-100 h-[290px] overflow-hidden rounded flex items-center justify-center ' style={{backgroundImage:`url(${image})`}}>
        
    </div>
  )
}

export default InstitutionCard