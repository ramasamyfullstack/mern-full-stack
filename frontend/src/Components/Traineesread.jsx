import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Traineesread() {
    const [traineesData, setTraineesData] = useState([]);
    const [search, setSearch] = useState('');
    const redirection = useNavigate();


    const apiCollection = () =>{
         axios.get('http://localhost:5000/v1/api/trainees/readAllTrainees')
        .then((res)=>{
            // console.log(res.data);
            setTraineesData(res.data);            
        }).catch((err)=>{
          console.log(err);
      });
    }

    useEffect(()=>{
        apiCollection();
    },[])

   const showTrainee = async () => {
    try {
        if (!search.trim()) {
            alert("Please enter a name or email to search.");
            return;
        }

        const obj = {
            name: search,
            email: search
        };

        console.log("Sending request with:", obj);

        const filtedData = await axios.post('http://localhost:5000/v1/api/trainees/readTrainee', obj);
        
        

        if (Array.isArray(filtedData.data) && filtedData.data.length > 0) {
            console.log("Received data:", filtedData.data);
            setTraineesData(filtedData.data);
        } else {
            alert("No trainees found.");
            setTraineesData([]); // reset the table or UI
        }

    } catch (error) {
        console.error("Error fetching trainees:", error);
        alert("Something went wrong while fetching trainees.");
        setTraineesData([]); // fallback to empty state
    }
};

const deleteData = (email) =>{
    axios.delete('http://localhost:5000/v1/api/trainees/deleteTrainee', {data: { email: email }})
      .then((res)=>{
         console.log("Data Deleted", res);
         apiCollection();
      }).catch((err)=>{
          console.log(err);
      })
}

const updateData = ({name,email,batch,timings,year})=>{
    redirection('/update');    
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("batch", batch)
    localStorage.setItem("timings", timings)
    localStorage.setItem("year", year)  
       
}

  return (
    <div>
        <p><input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={showTrainee}>Search by Name/Email</button> </p>
      
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>BATCH</th>
                    <th>TIMINGS</th>
                    <th>YEAR</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    traineesData.map((res,i)=>{
                        return(
                            <tr key={i}>
                                <th>{res.name}</th>
                                <th>{res.email}</th>
                                <th>{res.batch}</th>
                                <th>{res.timings}</th>
                                <th>{res.year}</th>
                                <th>
                                    <button className='edit' onClick={(e)=>updateData(res)}>EDIT</button>
                                    <button className='delete' onClick={(e)=>deleteData(res.email)}>DELETE</button>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Traineesread