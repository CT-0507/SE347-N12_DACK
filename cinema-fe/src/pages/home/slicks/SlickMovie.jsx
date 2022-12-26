import  React, { memo,useState } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from '../../../img/poster_adam_4_1.jpg'
import poster1 from '../../../img/violent_night-700x1000px_1_.jpg'
import poster2 from '../../../img/hpm_poster_2x3_1_.jpg'
import poster3 from '../../../img/late_shift_-_700x1000.jpg'

import './slick.css'
import { selectFilmById, useGetFilmsQuery } from "../../admin/filmsApi/filmsApiSlice";
import PlayTrailer from "../../../components/playTrailer/PlayTrailer";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
function SlickMovie() {
    
    let settings = {
        dots: false,

        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const {
        data: films,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetFilmsQuery("filmsList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    let content
    if (isLoading) content = <div className="w-100 h-100"><Spinner /></div>
    if (isError) content = <div className="w-100 h-100">{error?.data?.message}</div>
    if (isSuccess) {
        const { ids } = films
        console.log(films)
        content = ids?.length
            ? ids.map(filmId => <FilmItem key={filmId} filmId={filmId} />)
            : null
    }
    return (

        <Slider {...settings}>
            {content}
            
        </Slider>
         
    );
}

export default SlickMovie;

const FilmItem = ({ filmId }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const film = useSelector(state => selectFilmById(state, filmId))
    console.log(film)
    if (film) {
        
        return (
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Link to='movie-description'><Card.Img variant="top" src={`http://localhost:3500/${film.poster}`} /></Link>

                    <Card.Body>
                        <Card.Title style={{ textOverflow: "ellipsis", overflow: "hidden", wordWrap: "break-word", whiteSpace: "nowrap", }}>{film.filmName}</Card.Title>
                        {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary" onClick={() => setModalShow(true)}>Xem trailer</Button></Col>
                            <Col><Link to='movie-description'><Button variant="primary">Đặt vé</Button></Link></Col>
                        </Row>
                    </Card.Body>
                </Card>
                <PlayTrailer
                show={modalShow}
                onHide={() => setModalShow(false)}
                linkTrailer={film.trailerLink}
                />
            </div >
        )
    } else return null
}