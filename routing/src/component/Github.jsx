import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data , setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/haneebee')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);  
    //         setdata(data)
    //     } )
    // }, []);
    const data =  useLoaderData();
  return (
    <div>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="github-profile" width={300} />
    </div>
  )
}

export default Github

export const githubinfo = async () =>{
    const response = await fetch('https://api.github.com/users/haneebee')
    return response.json()
}