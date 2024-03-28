
import React,{useReducer,useEffect} from 'react'
import { productData } from '../data/productData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import axios from 'axios';
import { getError } from '../utils/utils';
import { ApiError } from '../types/ApiError';
import Loading from '../components/loading';
import ErrorMessage from '../components/ErrorMessage';
import Rating from '../components/Rating';
import PLPCard from '../components/PLPCard';
import { useGetProductsQuery } from '../hooks/plpHooks';



export default function HomePage() {

  // type State = {
  //   products:Product[],
  //   loading:boolean,
  //   error:string
  // }

  // type Action = |{type:"FETCH_REQUEST"}| {type:"FETCH_SUCCESS",payload:Product[]}|{type:"FETCH_ERROR",payload:string}

  // const initialState ={
  //   products:[],
  //   loading:true,
  //   error:''
  // };
  
  // const reducer = (state:State,action:Action)=>{

  //   switch(action.type){
  //     case 'FETCH_REQUEST':
  //       return {...state, loading:true}
  //     case 'FETCH_SUCCESS':
  //       return {...state, products:action.payload, loading:false}
  //     case 'FETCH_ERROR':
  //       return {...state, error:action.payload, loading:false}

  //   }
  // };

  // const [{loading,error,products},dispatch] = useReducer<React.Reducer<State,Action>>(reducer,initialState);

  // useEffect(()=>{
  //   const fetchData = async()=>{
      
  //     dispatch({type:"FETCH_REQUEST"});

  //     try{
  //       const result = await axios.get("http://localhost:4000/api/products");
  //       dispatch({type:'FETCH_SUCCESS',payload:result.data});
  //       //console.log({type:'FETCH_SUCCESS',payload:result.data});
  //     }catch(e){
  //       dispatch({type:'FETCH_ERROR',payload: getError(e as ApiError)})
  //     }
  //   }

  //   fetchData();
    
  // },[])
  const {data:products,isLoading,error} = useGetProductsQuery()
  return (
    <div>
      {
        isLoading?<Loading/>:
        error?<ErrorMessage>{getError(error as ApiError)}</ErrorMessage>:
        <Row >
        {
          products?.map((e,i)=>{
            //console.log(e)
            return(
            <Col key={i} sm={6} md={4} lg={3}>
             <PLPCard product={e}></PLPCard>
            </Col>
            );
          })
        }
        </Row>
      }
      
    </div>
  )
}
