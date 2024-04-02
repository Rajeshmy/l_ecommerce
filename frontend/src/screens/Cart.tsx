
import React,{useReducer,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import { getError } from '../utils/utils';
import { ApiError } from '../types/ApiError';
import Loading from '../components/loading';
import ErrorMessage from '../components/ErrorMessage';
import { useCartDetailsQuery } from '../hooks/cartHooks';
import CartCard from '../components/CartCard';


export default function Cart() {
  // const cartlist = [
  //   {_id:"660baa1ab68c4a5262735490",c_id:"73835776",price:599.99,quantity:2,slug:"smartphone-x1",total:1199.98,user:"raju1",__v:"0"}
  // ];
  const {data:cartlist,isLoading,error} = useCartDetailsQuery();

  return (
    <div>
      <h3>MyCart List</h3>
      {
        isLoading?<Loading/>:
        error?<ErrorMessage>{getError(error as ApiError)}</ErrorMessage>:
        <Col >
        {
          cartlist?.map((e,i)=>{
            return(
            <Row key={i} style={{margin:20}}>
             <CartCard cart={e}></CartCard>
            </Row>
            );
          })
        }
        </Col>
      }
    </div>
  )
}
