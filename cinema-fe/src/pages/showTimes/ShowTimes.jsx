import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

import 'react-calendar/dist/Calendar.css';
import Poster from '../../img/poster_avatar2.jpg'

import './showTimes.css'

import { useEffect, memo } from 'react'
const ShowTimes = memo(() => {
    useEffect(() => {
    }, [])
    const [value, onChange] = useState(new Date());
    return (
      <Container className="container-shows-times py-4">
        <h1>Lịch chiếu</h1>
        <Row className="justify-content-md-center">
            <Col xs lg="2">
                <Form.Select aria-label="Default select example">
                    <option>Chọn Rạp</option>
                    <option value="1">Rạp Quận 1</option>
                    <option value="2">Rạp Quận 2</option>
                    <option value="3">Rạp Quận 3</option>
                    <option value="4">Rạp Quận 4</option>
                    <option value="5">Rạp Quận 5</option>
                    <option value="6">Rạp Quận 6</option>
                </Form.Select>
            </Col>
            <Col xs lg="2">  
                <div className='pick-day'>
                    <Tippy
                        interactive
                        render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                             <Calendar onChange={onChange} value={value} />
                        </div>
                        )}
                    >
                        <div className='show-calendar'>{value.getDate()}/{value.getMonth()}/{value.getFullYear()} 
                            <FontAwesomeIcon icon={faCalendar} className='ms-4'/>
                        </div>
                        
                    </Tippy>
                    
                </div>
                    
               
            </Col>
            
        </Row>
        <Row>
            <Col sm={3}xs={6}>
                <img className='img-show-times mt-4'style={{width:'100%'}} src={Poster}></img>
            </Col>
            <Col sm={9} xs={12}>
                <h4 className='px-4 mb-0 mt-4'>Rạp Quận 1</h4>
                <Row className='row-show-times mx-auto'>
                    <Row>
                        <Col sm={3}>
                            2D - Phụ đề
                        </Col>
                        <Col sm={9}>
                            <ul>                               
                                <li ><Link  to='/movies'style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            3D - Phụ đề
                        </Col>
                        <Col sm={9}>
                            <ul>
                                <li ><Link  to='/movies'style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Row>
                <h4 className='px-4 mb-0 mt-4'>Rạp Quận 2</h4>
                <Row className='row-show-times mx-auto'>
                    <Row>
                        <Col sm={3}>
                            2D - Phụ đề
                        </Col>
                        <Col sm={9}>
                            <ul>
                                <li ><Link  to='/movies'style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
            
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            3D - Phụ đề
                        </Col>
                        <Col sm={9}>
                            <ul>
                                <li ><Link  to='/movies'style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                                <li ><Link style={{ textDecoration: 'none' }}>16:30</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Row>
            </Col>
        </Row>
      </Container>
    
    )
})

export default ShowTimes