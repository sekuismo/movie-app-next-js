'use client'

import { useEffect, useState } from "react"
import axios from "axios"

function page() {
    const [api,setApi] = useState([])


    useEffect(()=>{
        const call  = async ()=>{
            const response  = await axios.get('https://rickandmortyapi.com/api/character')
            const data = response.data.results
            setApi(data)   
        }
        call()
    },[])
  return (
    <div className="container mx-0 my-0">
        <h1 className="text-8xl font-bold text-center m-20   ">ricky martin</h1>
        
        <div className="grid grid-cols-4 gap-4 ">
            { api ? api.map(personaje => ( 
                <div className="container border border-solid border-gray-400 p-4 "> 
                <img key={personaje.id} src={personaje.image} className=""/>
                <p className="text-center font-bold bg-slate-600 rounded-md text-zinc-50 m-1  "  >Name: {personaje.name}</p>
                <p className="text-center font-bold bg-slate-600 rounded-md text-zinc-50 m-1 ">Status: {personaje.status}</p>
                </div>
            )  ) : <p>cargando</p>  }
        </div>
    </div>
  )
}

export default page