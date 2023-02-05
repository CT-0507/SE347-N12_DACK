import React from "react";
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pay() {
    const {selected, totalprice}=useParams();
    return ( 
        <Container>
            thanh toán
        </Container>
        
     );
}

export default Pay;