import React ,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
    const{id} = useParams()
     const[note,setNote] = useState()
     const[content,setContent] = useState()
     const navigate = useNavigate()

     useEffect(() =>{
        axios.get('http://localhost:5000/getUser'+id)
        .then(result => {console.log(result)
            setNote(result.data.note)
            setContent(result.data.content)
            
        })
        .catch(err => console.log(err))

    },[])

    const Update = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:5000/updateUser/"+id,{note,content})
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
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage:"linear-gradient(to right, blue , violet)"}}>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update} className=" create">
                <h2>Update User</h2>
                <div className='mb-2' id="create_note">
                    <label htmlFor="">Notes Name:</label>
                    <input type="text" placeholder='Enter your notes ' className='form control' style={{width: "300px"}}
                    value={note} onChange={(e) =>setNote(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Notes Content:</label>
                    <input type="text" rows="4" cols="50" placeholder='Enter your content' className='form control' style={{width: "300px",paddingBottom:"100px"}}
                    value={content} onChange={(e) =>setContent(e.target.value)}/>
                </div>

                <button className='btn btn-success' id="end" style={{backgroundImage:"linear-gradient(to right,  violet ,blue)"}}>Update</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default UpdateUser