import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'


function Traineesupdate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [timings, setTimings] = useState("");
  const [year, setYear] = useState();
  const [msg, setMsg] = useState("");

  const redirection = useNavigate();

  useEffect(()=>{    
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
    setBatch(localStorage.getItem("batch"))
    setTimings(localStorage.getItem("timings"))
    setYear(localStorage.getItem("year"))
},[])

  const updateFormData = async(e)=>{
     e.preventDefault();
     e.preventDefault();
      if (!name || !email || !batch || !timings || !year) {
        setMsg("All fields are required");
        return;
    }
     await axios.put('http://localhost:5000/v1/api/trainees/updateTrainee',{
        name,email,batch,timings,year
     })
     .then((r)=>{
        console.log("user Updated");
        setMsg("Data Updated")
        setTimeout(()=>{
          redirection("/list")
        },1000)
       
     })
     .catch((err)=>{
        console.log(err);
     })

}


  return (
    <div>
      <div className="container">
        <form onSubmit={updateFormData}>
        <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} disabled /> <br /> <br />
        <label>Enter Batch : </label>
        <select onChange={(e) => setBatch(e.target.value)} value={batch}>
          <option value="">--Select--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="April">March</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select> <br /> <br />
        <input type="text" placeholder='Enter Timings' value={timings} onChange={e=>setTimings(e.target.value)}/> <br /> <br />
        <input type="number" placeholder='Enter Year' value={year} onChange={e=>setYear(e.target.value)}/> <br /> <br />
        <button type="submit">UPDATE</button>
      </form>
      <h3>{msg}</h3>
      </div>
      


    </div>
  )
}

export default Traineesupdate