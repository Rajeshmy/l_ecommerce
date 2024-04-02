
import axios from "axios";


const apiClient = axios.create({
    baseURL:process.env.NODE_ENV==='development'? "http://localhost:4000/":'/',
    headers:{
        'Content-Type':"application/json",
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2MGJhODY1M2EwZjczNjFjN2I0NzMzNSIsInVzZXIiOiJyYWp1MSIsImVtYWlsIjoicm1lbGVrb3RlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJE1MTGxEbDFtZElvcXhEblJENVF4ay5qYWZCekk1ZVMyTHVJd2dRNHkyTWhzLjlhMzFTSUdtIiwiY3JlYXRlZEF0IjoiMjAyNC0wNC0wMlQwNjo0MDozNy43ODRaIiwidXBkYXRlZEF0IjoiMjAyNC0wNC0wMlQwNjo0MDozNy43ODRaIiwiX192IjowfSwiaWF0IjoxNzEyMDQwMDYxLCJleHAiOjE3MTIwNjE2NjF9.qKxMkYXUN1GUPfwBkMGtEgdcAiv1Qr8VrBfT0vYDcHI'
    },
});

export default apiClient;