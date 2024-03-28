
import React from 'react'
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { Button, Card } from 'react-bootstrap';
import { addToCart } from '../services/api';

export default function PLPCard({product}:{product:Product}) {
  return (
    <Card>
         <Link to={`/product/${product.slug}`}>
              <img src={"https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f686/-1117Wx1400H-462323964-white-MODEL.jpg"} alt='img' className='product-image'></img>
         </Link>
         <Card.Body>
            <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReveiews={product.numReviews}/>
            <Card.Text>{product.price}</Card.Text>
            {
                product.countInStock === 0?(
                    <Button variant='light' disabled>Out of stock</Button>
                ):(
                    <Button onClick={()=>addToCart(product.slug)}>Add to cart</Button>
                )
            }
         </Card.Body>
    </Card>
  )
}

