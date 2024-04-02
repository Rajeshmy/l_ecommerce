import axios from 'axios'


const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ZjJlNjcwMzg3MzJmMjM0NzhlM2JjYiIsInVzZXIiOiJyYWp1IiwiZW1haWwiOiJyYWp1bXkxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkd2RiSjA0czYwUkgvRUVlNHZUeHhhZTdoQjk3dzV3b3RzLzc2UHlBcVB0YmcvZFJyLzV0enEiLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTE0VDExOjU4OjQwLjQ5MVoiLCJ1cGRhdGVkQXQiOiIyMDI0LTAzLTE0VDExOjU4OjQwLjQ5MVoiLCJfX3YiOjB9LCJpYXQiOjE3MTE5NTQ0NjAsImV4cCI6MTcxMTk3NjA2MH0.nUOEX03ZVLlMsIZdv3th9pRlqax4GPDENp2OjZYFU8g"

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