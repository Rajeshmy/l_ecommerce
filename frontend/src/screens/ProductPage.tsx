
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useGetProductDetailsQuery } from '../hooks/plpHooks';
import { useAddToCartQuery } from '../hooks/cartHooks';
import Loading from '../components/loading';
import ErrorMessage from '../components/ErrorMessage';
import { getError } from '../utils/utils';
import { ApiError } from '../types/ApiError';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import apiClient from '../apiClient';
import { addToCart } from '../services/api';

export default function ProductPage() {

  const params=useParams();
  const {slug}=params;
  const {data:productdetails,isLoading,error} = useGetProductDetailsQuery(slug);


  
  
  return (
    <div>
      {
        isLoading?<Loading/>:
        error?<ErrorMessage>{getError(error as ApiError)}</ErrorMessage>:
        <div>
         <Row>
          <Col md={6}>
            <img className={'large'} src={"https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f686/-1117Wx1400H-462323964-white-MODEL.jpg"} alt={productdetails?.name}></img>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <head>
                <title>{productdetails!.name}</title>
                </head>
                <h1>{productdetails!.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={productdetails!.rating}  numReveiews={productdetails!.numReviews}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>
                Price:${productdetails?.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description:{productdetails?.desc}
              </ListGroup.Item>
              {productdetails!.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={()=>addToCart(productdetails?.slug)} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Col>
          <Col md={3}></Col>
         </Row>
        </div>
        
      }  
      </div>
  );

};

