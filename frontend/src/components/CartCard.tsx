
import React from 'react'
import { Cart } from '../types/Cart';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';



export default function CartCard({cart}:{cart:Cart}) {
  return (
    <Card>
         <Card.Body> 
            <Card.Title>{cart.slug}</Card.Title>
            <Card.Text>Price:  {cart.price}</Card.Text>
            <Card.Text>Quantity:  {cart.quantity}</Card.Text>
            <Card.Text>Total:  {cart.total}</Card.Text>
          
         </Card.Body>
    </Card>
  )
}

