import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {
    const [users, setUsers] = useState([])

    const {id} = useParams()

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>S. No.</th>
                            <th scope="col" className='text-center'>Name</th>
                            <th scope="col" className='text-center'>Username</th>
                            <th scope="col" className='text-center'>Email</th>
                            <th scope="col" className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row" key={index} className='text-center'>{index + 1}</th>
                                        <td className='text-center'>{user.name}</td>
                                        <td className='text-center'>{user.username}</td>
                                        <td className='text-center'>{user.email}</td>
                                        <td className='text-center'>
                                            <Link to={`/user/${user.id}`} 
                                            className='btn btn-primary mx-2'>
                                                View
                                            </Link>
                                            <Link to={`/edituser/${user.id}`} 
                                            className='btn btn-outline-primary mx-2'>
                                                Edit
                                            </Link>
                                            <button 
                                            className='btn btn-danger mx-2'
                                            onClick={() => deleteUser(user.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

