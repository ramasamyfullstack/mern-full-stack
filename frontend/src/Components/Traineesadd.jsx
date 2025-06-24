import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'


function Traineesadd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [timings, setTimings] = useState("");
  const [year, setYear] = useState();
  const [msg, setMsg] = useState("");

  const redirection = useNavigate();

const addFormData = async(e)=>{
      e.preventDefault();
      const formDatas = {name,email,batch,timings,year}
     await axios.post("http://localhost:5000/v1/api/trainees/addTrainee" ,formDatas)
      .then((res)=>{
          console.log(res , "Data Submitted...");
           setMsg("Form submitted..successfully")
          setTimeout(()=>{
            redirection("/list")
          },2000)
      }).catch((err)=>{
          console.log(err);
      })
    }


  return (
    <div>
      <div className="container">
        <form onSubmit={addFormData}>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <label>Enter Batch : </label>
        <select onChange={(e) => setBatch(e.target.value)}>
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
        <input type="text" placeholder='Enter Timings' onChange={e=>setTimings(e.target.value)}/> <br /> <br />
        <input type="number" placeholder='Enter Year'  onChange={e=>setYear(e.target.value)}/> <br /> <br />
        <button type="submit">REGISTER </button>
      </form>
      <h3>{msg}</h3>
      </div>
      


    </div>
  )
}

export default Traineesadd