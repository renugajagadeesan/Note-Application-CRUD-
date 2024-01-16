import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



function Home() {
    const[users,setUsers] = useState([])

     useEffect(() =>{
        axios.post('http://localhost:5000/home')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

     },[])
     
    const handleDelete = (id) =>{
        axios.delete('http://localhost:5000/deleteUser/'+id)
        .then(res => {console.log(res)
              window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
 
  return (
    <>
    <div className='Notes'>
        <div>
          <h1> <span style={{fontSize:"90px"}}>H</span>ello and welcome to the Notes <img style={{width:"50px"}} src="https://i.ibb.co/RSP5FZd/1342400-middle-removebg-preview.png"/></h1>
          </div>
         <div style={{paddingTop:'50px'}}>
          <Link to="/" className='btn btn-success'>Logout</Link>
          </div>
    </div>
    <div className='d-flex vh-100 justify-content-center align-items-center  notesbg' style={{backgroundImage:"linear-gradient(to right,  violet ,blue)"}}>
          
        
        <div className='w-75 bg-white rounded p-3'>
            
             <h2 className='noteslogo'>Notes</h2>
            <Link to="/create" className='btn btn-success add' >Add +</Link>

            
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Notes</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                 {
                  users.map((user) => {
                        return <tr>
                            <td>{user.note}</td>
                            <td>{user.content}</td>
                            <td><Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                            <button className='btn btn-danger'
                            onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    })
                 }

                </tbody>



            </table>
            
            </div> 
       
        
        
    </div>
    </>
  )
}

export default Home