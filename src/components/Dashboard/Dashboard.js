import axios from 'axios'
import React, { useEffect,useState } from 'react'

axios.defaults.withCredentials = true

let firstRender = true

function Dashboard() {

  const [user, setUser] = useState(undefined)

const refreshToken = async() =>{
  const res = await axios
  .get('http://localhost:4000/api/refresh',{
    withCredentials:true
  }).catch(err => console.log(err))

  const data = await res.data
  return data
}

const sendRequest = async () =>{
  const res = await axios
  .get('http://localhost:4000/api/user',{
    withCredentials:true
  }).catch(err => console.log(err))

  const data = await res.data
  return data
}

  useEffect(()=>{
    if(firstRender)
    {
      firstRender=false
      sendRequest().then((data)=>setUser(data.user))
    }
    let interval = setInterval(()=>{
      refreshToken().then((data)=>setUser(data.user))
    },1000*29)

    return ()=>clearInterval(interval)


  },[])

  return (
    <div>
      Welcome
      {user && <h1>{user.username}</h1>}
    </div>
  )
}

export default Dashboard