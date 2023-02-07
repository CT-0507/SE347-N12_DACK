import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';

import './btnPay.css'

function ButtonPay() {
    return (
        <Button className='btn-pay px-1'   >
            <FontAwesomeIcon icon={faCreditCard } className='mx-1' />Thanh Toán
        </Button>
      );
}

export default ButtonPay;