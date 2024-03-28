import React,{useEffect, useState} from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { RootState,AppDispatch } from './store/store';
import { increment } from './store/productslice';


function App() {

const {value} = useSelector((state:RootState )=>state.reducer.product);
const dispatch:AppDispatch=useDispatch();
useEffect(()=>{
  console.log(value);
},[value]);


  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container >
          <Navbar.Brand>LAmazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>Cart</a>
            <a href="/signin" className='nav-link'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Outlet/>
        </Container>
        
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
