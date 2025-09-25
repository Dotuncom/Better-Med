import { useState,  type JSX } from "react"
import ExperienceAndReach from "./ExperienceAndReach"
import Technology from "./Technology"
import Institution from "./Institution"
import ExperienceDoctor from "./ExperienceDoctor"
import OneStopCare from "./OneStopCare"


type TabProps ={
    id:number,
    name:string,
    content:JSX.Element

}
const TabSection = () => {
    const [CurrentTab, setCurrentTab] = useState<number>(1)
    

    const tabs:TabProps[] =[
        {id:1, name:'Experience and Reach', content:<ExperienceAndReach/>},
        {id:2, name:"Technology", content: <Technology/> },
        {id:3,name:'Institution', content:<Institution/> },
        {id:4, name:'Experience Doctors', content:<ExperienceDoctor/>},
        {id:5 , name:"One-stop Care" , content:<OneStopCare/>}
    ]

    const handleTabChange =(id:number)=>{
            setCurrentTab(id)
        }
 
        


  
  return (
    <div>
       
     <div className="block lg:hidden p-4 ">
       
        <select
        value={CurrentTab}
        onChange={(e)=>handleTabChange(Number(e.target.value))}
         className="bg-accent p-3 text-white">
          {
            tabs.map((tab )=>(
                  <option 
                  key={tab.id}
                  value={tab.id}>
                  
                    {tab.name}
                  </option>
            ))
          }
        </select>
      </div>
        
         <div className={`hidden lg:block    border-b border-b-gray-400  p-4`}>
          <div className="flex  text-gray-700 justify-evenly p-4  border-b border-b-gray-700 ">
            {
                tabs.map((tab)=>(
             <button 
             onClick={()=>{handleTabChange(tab.id)}}
             key={tab.id}
              className={` ${CurrentTab===tab.id ?'border-b-2 p-2 border-b-primary':''} relative`}>
              {tab.name}
             {CurrentTab ===tab.id &&   
             <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
}
            </button>
                ))

            
            }
           
          </div>
        </div>         
         {tabs.find((tab)=>tab.id === CurrentTab )?.content}



        

       
    </div>
  )
}

export default TabSection