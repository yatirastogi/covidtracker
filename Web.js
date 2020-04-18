import React,{  useState,useEffect} from 'react';
import axios from'axios'

function Web()
{
    const ch={
        fontSize:"50px",
        width:"500px",
        backgroundColor:"red"




    }
    const ch2={
        
       color:"red"


    }
    
   const styl={
        padding:"10px",
        color:"white",
        border:"5px solid green",
        borderRadius:"30px",
        fontSize:"30px",
        
        
        backgroundColor:"black"
   };
    
const sty={
    padding:"10px",
    color:"white",
    border:"2px solid white",
    fontSize:"25px",
    textAlign:"center",
    backgroundColor:"black"
};
const[Country,setCountry]=useState({})
const[id,setId]=useState([])

    useEffect(()=>{
        axios
        .get(`https://corona.lmao.ninja/v2/countries/${id}`)
        .then(res=>{
            console.log(res)
            setCountry(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])

    let msg
    if(!id)
    {
        msg=<div style={ch2}>INVALID COUNTRY</div>

    }

    return(   
<div >
<button style={styl}>Search Country </button>
   {msg} <input type="text" style={sty} value={id} onChange={e=>setId(e.target.value)}/>


<h1 style={ch}>Country {id} </h1>
<h1 style={ch}>Total Cases {Country.cases}</h1>
<h1 style={ch}>Active Cases {Country.active} </h1>
<h1 style={ch}>Deaths {Country.deaths}</h1>
<h1 style={ch}>Recovered {Country.recovered}</h1>






    </div>

)
}
export default Web

    