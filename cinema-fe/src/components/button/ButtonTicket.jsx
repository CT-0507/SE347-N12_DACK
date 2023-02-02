import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

import './buttonPlay.css'
function ButtonTicket({onClick}) {
    const props={
        onClick,
    }
    return ( 
        <Button className='btn-play px-1' {...props} >
            <FontAwesomeIcon icon={faTicket} className='ms-0 me-1' />Mua vé
        </Button>
     );
}

export default ButtonTicket;