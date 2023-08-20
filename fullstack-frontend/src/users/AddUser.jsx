import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/user', user)
        navigate('/')
    }

    return (
        <div className='container py-4'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center mb-4'>Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}> 
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='John Doe'
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='@johndoe'
                                name='username'
                                value={username}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='john@email.com'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link to={'/'} className='btn btn-outline-danger mx-2'>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
