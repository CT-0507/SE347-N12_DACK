import { memo } from "react";
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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

export default SlickMovie;

const FilmItem = ({ filmId }) => {
    const film = useSelector(state => selectFilmById(state, filmId))
    if (film) {
        return (
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Link to={`/movie-description/${film.id}`}>
                        <Card.Img variant="top" src={`http://localhost:3500/${film.poster}`} />
                    </Link>


                    <Card.Body>
                        <Card.Title style={{ textOverflow: "ellipsis", overflow: "hidden", wordWrap: "break-word", whiteSpace: "nowrap", }}>{film.filmName}</Card.Title>
                        {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div >
        )
    } else return null
}