
export type InstitutionCardProps ={
  image:string,
    title:string,
    price:string,
    
}

const InstitutionCard = ({title,price,image}:InstitutionCardProps) => {
  return (
    <div className='relative border border-accent/50 group min-w-100 max-w-100 h-[290px] overflow-hidden rounded flex flex-col items-centerm justify-center gap-9 bg-cover bg-center bg-no-repeat transition-all delay-880 duration-900 ease-in-out' style={{backgroundImage:`url(${image})`}}>
       <div className='absolute inset-0 group-hover:bg-accent/60 group-active:bg-accent/60 z-4 '> </div>
        <div className='h-10 w-full bg-accent text-white flex  text-2xl items-center justify-center'>
          <h1> {title}</h1>
        </div>

        <h1 className='lg:hidden group-hover:block text-2xl text-white text-center'>{price}$</h1>
    </div>
  )
}

export default InstitutionCard