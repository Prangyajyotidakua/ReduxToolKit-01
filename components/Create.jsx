import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { createUser } from '../features/userDetailSlice'
import { useNavigate } from 'react-router-dom'
export const Create = () => {
    const [users, setUsers] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        /** ☝️☝️ it will return a empty object 
         * if we set the value it will return in oject format with key and value
         * 
         * {name: prangya,
         * email:abc@gmail,
         * age:12,
         * gender:female
         * } */
        console.log(users)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("users...",users)
        dispatch(createUser(users))
        navigate("/read")
    }

    return (
        <>
        <h1>Enter data</h1>
            <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input type="text" name='name' className="form-control" onChange={getUserData} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" onChange={getUserData} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" name='age' className="form-control" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        onChange={getUserData}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        onChange={getUserData}
                    />
                    <label className="form-check-label">Female</label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="others"
                        type="radio"
                        onChange={getUserData}
                    />
                    <label className="form-check-label">Others</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
