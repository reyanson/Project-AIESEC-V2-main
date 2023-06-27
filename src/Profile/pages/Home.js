import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from "../../scenes/global/Sidebar";
import Topbar from "../../scenes/global/Topbar";

export default function Home() {
     //storing user info
  const [users,setUsers]=useState([]);

  const {id} = useParams()

  useEffect(()=>{
    loadUsers();
  });

  const loadUsers=async()=>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }


  return (
    <>
    <Topbar/>
    <Sidebar/>
    <div className='container mt-5'>
        <div className='py-4'>
                    <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ajanthini Vadivel</td>
                    <td>Ajanthini</td>
                    <td>ajantha99720@gmail.com</td>
                    <td>
                                <Link className='btn btn-primary mx-2'
                                     to={`/viewuser/1`}
                                
                                >View</Link>
                                <Link className='btn btn-outline-primary mx-2' 
                                     to={`/edituser/1`}
                                
                                >Edit</Link>

                                <Link className='btn btn-danger mx-2'
                                    // onClick={()=>deleteUser(user.id)}
                                
                                >Delete</Link>


                    </td>
                </tr>

                {/* {
                    users.map((user,index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-primary mx-2'
                                    to={`/viewuser/${user.id}`}
                                
                                >View</Link>
                                <Link className='btn btn-outline-primary mx-2' 
                                    to={`/edituser/${user.id}`}
                                
                                >Edit</Link>
                                <Link className='btn btn-danger mx-2'
                                    onClick={()=>deleteUser(user.id)}
                                
                                >Delete</Link>
                            </td>
                        </tr>
                    )) //create new array
                } */}
                
                
            </tbody>
            </table>
        </div>
    </div>
    </>
  )
}
