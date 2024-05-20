import React, { useEffect, useState } from 'react'
import { api_rout_url } from '../../utils/Constants'


export const Regulartask = () => {

    const [data , setdata]= useState("")
   

    useEffect(()=>{

        const fetchregulartask = async() =>{
            const response = await fetch(`${api_rout_url}/api/auth/regulartask`)
           
            
            const datas = await response.json()
          
            setdata(datas)
        }

        
    

        fetchregulartask()

    },[])

  return (
    <div>
    
         
       {data.length > 1  ?  
       <div>
       { data?.map((item)=>(

        <tr key={item._id} className='' >
            <table className='mb-5 mt-10'>
            <thead className='text-gray-400'>
                <th className="border border-gray-00 py-2 px-4 sm:w-1/5">Title</th>
                <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Description</th>
                <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Status</th>
                <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Deadline</th>
                <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Progress</th>
                </thead>
           
            <td className='border border-gray-400 text-gray-400'>{item.title}</td>
            <td className='border border-gray-400 text-gray-400'>{item.description}</td>
            <td className='border border-gray-400 text-gray-400'>{item.status}</td>
            <td className='border border-gray-400 text-gray-400'>{item.deadline.day}-{item.deadline.month}-{item.deadline.year}</td>
            <td className='border border-gray-400 text-gray-400'>no progress</td>
           
            </table>
           
        </tr>    
        
       ))
       }
       </div> :
        <div>
        
 
         <tr  >
             <table className='mb-5 mt-10'>
             <thead className='text-gray-400'>
                 <th className="border border-gray-00 py-2 px-4 sm:w-1/5">Title</th>
                 <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Description</th>
                 <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Status</th>
                 <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Deadline</th>
                 <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Progress</th>
                 </thead>
            
             <td className='border border-gray-400 text-gray-400'>{data?.[0]?.title}</td>
             <td className='border border-gray-400 text-gray-400'>{data?.[0]?.description}</td>
             <td className='border border-gray-400 text-gray-400'>{data?.[0]?.status}</td>
             <td className='border border-gray-400 text-gray-400'>{data?.[0]?.deadline.day}-{data?.[0]?.deadline.month}-{data?.[0]?.deadline.year}</td>
             <td className='border border-gray-400 text-gray-400'>no progress</td>
            
             </table>
            
         </tr>    
         
    
        </div>   
       
        }
       

    </div>
  )
}
