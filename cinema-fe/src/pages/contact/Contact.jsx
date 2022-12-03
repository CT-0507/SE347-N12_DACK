import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { memo } from 'react'

const Contact = memo(() => {
    return (
        <Container>
            <Row>
                <h1>Liên hệ với chúng tôi</h1>
            </Row>
            <Row> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.026689548042!2d106.78619318048578!3d10.886589176739285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a29dc7dc6d%3A0xf7a26cda04e8b610!2sKTX%20%C4%90HQG%20KHU%20B!5e0!3m2!1svi!2s!4v1669825060121!5m2!1svi!2s" 
                    width="400"
                    height="350" 
                    
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </Row>
            
        </Container>
    )
})

export default Contact;