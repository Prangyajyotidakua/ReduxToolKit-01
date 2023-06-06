import React from 'react'
import { useSelector } from 'react-redux'
import './customModalstyle.css'
export const CustomModal = ({id, showPopUp , setshowPopUp}) => {
    const allusers = useSelector((state) => state.app.users)
   //the data we get in array format so we need to destructure the arrar
    const singleUser = allusers.filter((ele) => ele.id === id)
  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <button onClick={()=> setshowPopUp(false)}>close</button>
    <h1>{singleUser[0].name} </h1>
    <p>{singleUser[0].email} </p>
    <p>{singleUser[0].age} </p>
    <p>{singleUser[0].gender} </p>
    </div>
    </div>
  )
}
