import axios from 'axios'


const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ZjJlNjcwMzg3MzJmMjM0NzhlM2JjYiIsInVzZXIiOiJyYWp1IiwiZW1haWwiOiJyYWp1bXkxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkd2RiSjA0czYwUkgvRUVlNHZUeHhhZTdoQjk3dzV3b3RzLzc2UHlBcVB0YmcvZFJyLzV0enEiLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTE0VDExOjU4OjQwLjQ5MVoiLCJ1cGRhdGVkQXQiOiIyMDI0LTAzLTE0VDExOjU4OjQwLjQ5MVoiLCJfX3YiOjB9LCJpYXQiOjE3MTA3NzU1NDAsImV4cCI6MTcxMDc5NzE0MH0.9PYsb2BtLwwKk1GHLeNGkOQP85pMs2I_3uxXwF6H3Ls"


export const addToCart=async(props:string|undefined)=>{
   
    await axios.post(`/api/addtocart/:${props}`,null,
    {
      headers:{
        "Authorization":`Bearer ${tok}`
      }
    }
    )
    .then((e)=>console.log(e)).catch(err=>console.log(err))
  };