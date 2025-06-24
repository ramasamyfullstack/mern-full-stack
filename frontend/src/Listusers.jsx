import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Listusers() {
    const [usesData, setUserData] = useState([]);   
    useEffect(()=>{
      axios.get('http://localhost:5000/readAllUsers')
      .then((res)=>{
        console.log(res.data);        
        setUserData(res.data);         
         
      })
    },[])
   
    
  return (
    <div>
       
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                   usesData.map((data,i)=>{
                    return(
                        <tr key={i}>
                           <th>{data.id}</th>
                           <th>{data.name}</th>
                           <th>{data.email}</th>
                           <th>{data.age}</th>
                           <th>{data.city}</th>
                        </tr>
                    )
                   })
                }
            </tbody>
        </table>        
    </div>
  )
}

export default Listusers