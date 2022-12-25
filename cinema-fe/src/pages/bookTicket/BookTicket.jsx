import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// import filmPoster from '../../img/rasuk_poster_-1080x1350_1_.jpg'

// import './movies.css'

import { useEffect, memo } from 'react'
const BookTicket = memo(() => {
    useEffect(() => {
    }, []);
   
    return (
      <Container className="container-book-ticket">
        {/* <div >
            <Button onClick={handleClick1}>+</Button>
        </div>
        <div>{counter}</div> */}

      </Container>
      
    
    )
})

export default BookTicket

