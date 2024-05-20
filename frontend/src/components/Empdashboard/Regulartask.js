import React, { useEffect, useState } from 'react'
import { api_rout_url } from '../../utils/Constants'







export const Regulartask = () => {

    const [data , setdata]= useState("")


    useEffect(()=>{

        const fetchregulartask = async() =>{
            const response = await fetch(`${api_rout_url}/api/auth/regulartask`)
           
            
            const datas = await response.json()
            console.log(datas)
            setdata(datas)
        }

        
    

        fetchregulartask()

    },[])

  return (
    <div>
        <p className='text-white'>title</p>
       {
        data.map((item, index)=>(
            <div key={index}>
                <p className='text-white'>{item.title}</p>
                <p className='text-white'>{item.description}</p>
                <p className='text-white'>{item.status}</p>
                <p className='text-white'>{item.deadline.day}</p>
            </div>
        ))
       }

    </div>
  )
}
