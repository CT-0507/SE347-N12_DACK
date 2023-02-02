import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

import './buttonPlay.css'
function ButtonPlay({onClick}) {
    const props={
        onClick,
    }
    return ( 
        <Button className='btn-play px-1' {...props} >
            <FontAwesomeIcon icon={faPlay} className='mx-0' />Xem Trailer
        </Button>
     );
}

export default ButtonPlay;