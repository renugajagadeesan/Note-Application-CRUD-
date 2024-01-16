import React, { useState }from 'react'
import axios from "axios"
import { useNavigate , Link } from 'react-router-dom'

function Signup() {

    const history = useNavigate();

    const [name , setName ] = useState(' ')
    const [ email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
   
    async function submit(e){
        e.preventDefault();
        try{

            await axios.post("http://localhost:5000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                   
                    alert("User already existed")

                

                }else if (res.data==="notexist"){

                    history("/",{state:{id:email}})

                }
             })
             .catch(e=>{
                alert("wrong details")
                console.log(e);
             })

        }catch(e){

            console.log(e);

        }
    }


  return (
    <div className='login'>
    <div className='body'>
    <div className='wrapper'>
    <div className='form-wrapper sign-in'>
        
        <form action="/signup" method="Post">
        <h2>Signup</h2>
        <div className='input-group'>
            <input type="name" required onChange={(e)=>{setName(e.target.value)}}  name="" id=""/>
            <label>Username</label>
            </div>
            <div className='input-group'>
            <input type="email" required onChange={(e)=>{setEmail(e.target.value)}}  name="" id=""/>
            <label>Email</label>
            </div>
            <div className='input-group'>
            <input type="Password" required onChange={(e)=>{setPassword(e.target.value)}}  name="" id=""/>
            <label>Password</label>
            </div>
           
            <div className='remember'>
                <label><input type="checkbox"/>I agree with terms & condition</label>
            </div>
            <input className='button'  type="submit" onClick={submit}/>
        <div className='signup-link'>
            <p>I Already have a account 
        <Link to="/">Login</Link></p>
        </div>
        <div className='social-platform'>
            <p>Or sign in with</p>
            <div className='social-icons'>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>

        </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup