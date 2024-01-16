import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const[note,setNote] = useState()
    const[content,setContent] = useState()
    const navigate = useNavigate()
    

    const Submit = (e) =>{
       e.preventDefault();

       axios.post("http://localhost:5000/createUser",{note,content})
       .then(result => {
           console.log(result)
           navigate('/home')
       })
       .catch(err => console.log(err))
    }
  return (
    <>
       <div className='Notes'>
          <h1> <span style={{fontSize:"90px"}}>H</span>ello and welcome to the Notes <img style={{width:"50px"}} src="https://i.ibb.co/RSP5FZd/1342400-middle-removebg-preview.png"/></h1>
          </div>
    <div className='d-flex vh-100 justify-content-center align-items-center creates' style={{backgroundImage:"linear-gradient(to right, blue , violet)"}} >
       
        <div style={{paddingLeft:"75px"}} className='w-50 bg-white  p-5'>
            <form onSubmit={Submit} className=" create" >
                <h2>Add User</h2>
                <div className='mb-2' id="create_note">
                    <label htmlFor="">Notes Name:</label>
                    <input type="text" placeholder='Enter Notes' className='form control'
                    style={{width: "300px"}} onChange={(e) =>setNote(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Note Content:</label>
                    <input type="text" rows="4" cols="50"  placeholder='Enter content' className='form control' style={{width: "300px",paddingBottom:"100px"}}
                    onChange={(e) =>setContent(e.target.value)}/>
                </div>
                

                <button className='btn btn-success' id="end" style={{backgroundImage:"linear-gradient(to right,  violet ,blue)"}}> Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateUser