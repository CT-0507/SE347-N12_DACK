import { memo, useState } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import './slick.css'
import { selectFilmById, useGetFilmsQuery } from "../../admin/filmsApi/filmsApiSlice";

import ButtonTicket from '../../../components/button/ButtonTicket'
import ButtonPlay from '../../../components/button/ButtonPlay'
import PlayTrailer from '../../../components/playTrailer/PlayTrailer'

import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
function SlickMovie() {
    let settings = {
        dots: true,

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

export default memo(SlickMovie);

const FilmItem = ({ filmId }) => {
    const [modalShow, setModalShow] = useState(false);
    let idVideo = ''
    const film = useSelector(state => selectFilmById(state, filmId))
    if (film) {
        return (
            <div className="item">
                <Card style={{ width: '18rem', }} className="card-film">
                    <Link to={`/movie-description/${film.slug}`}>
                        <Card.Img variant="top" style={{ height: '415px' }} src={`http://localhost:3500/${film.poster}`} />
                    </Link>


                    <Card.Body>
                        <Card.Title style={{ textOverflow: "ellipsis", overflow: "hidden", wordWrap: "break-word", whiteSpace: "nowrap", }}>{film.filmName}</Card.Title>
                        {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                        <Row>
                            <Col><ButtonPlay onClick={() => setModalShow(true)}></ButtonPlay></Col>
                            <Col><Link to={`/show-times?film=${film.slug}&abc=123`}>
                                <ButtonTicket variant="primary"></ButtonTicket>
                            </Link></Col>
                        </Row>
                    </Card.Body>
                </Card>
                <PlayTrailer
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    idVideo={film.trailerLink}
                ></PlayTrailer>
            </div >
        )
    } else return null
}