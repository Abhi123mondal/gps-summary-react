import {React,useState} from "react";
import './Login.css';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Object from "./Object";

function Login(){
  const[login,setLogin]=useState(true);
   const[detail,setDetail]=useState(true);

  
    return(
      <>
  {
        login ? 
  (<div className="main">
    <input className="input" type='text'name="email" placeholder="Email Id"></input><br/><br/>
    <input type='password' className="input" placeholder="password"></input><br/><br/>
    <button  className="input" style={{backgroundColor:'red'}} onClick={()=>setLogin(false)}>Login</button><br/><br/>
       <h5 className="newuser" style={{color:'white'}}>New User?</h5>
  </div>) :(
          <div className="main2">
     <div>
    <h3>GPS Summary</h3>
    <div className="line">
      <BsSearch style={{marginLeft:'20px',marginTop:'5px'}}/> 
      <input className='searchbox'type='text'placeholder='Search By Device Id/Type'>
      </input>
      </div>
      <div>
        {
          detail ?
        (<table className="table">
          <thead>
          <tr>
          <th>Device Id</th>
          <th>Device Type</th>
          <th>Latest Timestamp</th>
          <th>Latest Location</th>
          <th></th>
          </tr>
          </thead>
         <tbody>
           {
            Object.map((values)=> {
            return(   <>
            <tr>
              <td className="tabledata">{values.DeviceId}</td>
              <td className="tabledata">{values.DeviceType}</td>
              <td className="tabledata">{values.Timestamp}</td>
              <td className="tabledata">{values.location}</td>
              <td className="tabledata"><AiOutlineArrowRight onClick={()=>setDetail(false)}/></td>
              </tr>
              </>)
             })}
             </tbody>
        </table>):(<div>
            <div className="device">
          <h3>{Object[0].DeviceId}</h3>
          <h3>{Object[0].DeviceType}</h3>
          <table className="table2">
            <thread>
              <tr>
                <th className="th2">Timestamp</th>
                <th className="th2">Location</th>
              </tr>
            </thread>
            <tbody>
              
                  {
                  Object.map((items)=>{
                    return(
                     <tr>
                      <td className="td2">{items.Timestamp}</td>
                      <td className="td2">{items.location}</td>
                     </tr>     
                    )
                  })}
               
            </tbody>
          </table>
          <div className="circle">
            </div>
            <div className="percent">
            <p>% Time spent on each location</p>
            <ul>
            <li> L1 80%</li>
            <li> L2 20%</li>
            </ul>
            </div>
          </div>
         
          </div>)
}
      </div>
      </div>
      </div>
    
  )
      }
      </>
    )
}
export default Login;