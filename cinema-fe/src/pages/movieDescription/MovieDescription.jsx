import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import ButtonLike from '../../components/button/ButtonLike'
import ButtonTicket from '../../components/button/ButtonTicket'

import './movieDescription.css'

import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux';
import { selectFilmBySlug } from '../admin/filmsApi/filmsApiSlice';
const MoviesDescription = memo(() => {
    const { slug } = useParams()
    const film = useSelector(state => selectFilmBySlug(state, slug))
    const { height, width } = useWindowDimensions();

    const isTablet = width < 1400
    return (
        <Container className="container-movies-description">
            <header>
                <h1>Nội Dung Phim</h1>
            </header>
            <Row className='border-top border-dark py-4'>
                <Col sm={3}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: isTablet,
                            width: 300,
                            height: 450,
                            src: `http://localhost:3500/${film?.poster}`
                        },
                        largeImage: {
                            src: `http://localhost:3500/${film?.poster}`,
                            width: 1200,
                            height: 1800,

                        },
                        enlargedImageContainerDimensions: {
                            width: '150%',
                            height: '130%'
                        }
                    }} />
                </Col>
                <Col sm={9}>
                    <h1>{film?.filmName}</h1>
                    <p>
                        <b>Đạo diễn: </b>{film?.directors.join(", ")}
                        <br />
                        <b>Diễn Viên: </b>{film?.actors.join(", ")}
                        <br />
                        <b>Thể loại: </b>{film?.tags.join(", ")}
                        <br />
                        <b>Khởi chiếu: </b>{film?.premiereDay}
                        <br />
                        <b>Thời lượng: </b>{film?.time} phút
                        <br />
                        <b>Ngôn ngữ: </b>{film?.language}
                        <br />
                        <b>Rated: </b> <b className='text-rated'>{film?.rated}</b>
                        <br />
                    </p>
                    <ButtonLike></ButtonLike>
                    <Link to={`/show-times?film=${film?.slug}&abc=123`}>
                        <ButtonTicket></ButtonTicket>
                    </Link>
                    <Row className='movie-tab my-2 '>
                        <Tabs
                            defaultActiveKey="description"
                            id="tab-description"
                            className="mb-3"

                        >
                            <Tab eventKey="description" title="Chi tiêt" className='button-tab'>
                                <p>
                                    {film?.description}
                                </p>
                            </Tab>
                            <Tab eventKey="trailer" title="Xem trailer">
                                <iframe width="100%" height="415" src={`https://www.youtube.com/embed/${film?.trailerLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                            </Tab>


                        </Tabs>
                    </Row>
                </Col>
            </Row>


        </Container>

    )
})

export default MoviesDescription