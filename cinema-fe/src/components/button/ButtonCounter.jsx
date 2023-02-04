import { React, useState } from 'react'
import './btnCounter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ButtonCounter() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
      };
     
      //decrease counter
      
      const decrease = () => {
        setCounter(count => count - 1);
      };
    
     
      //reset counter 
      
    return ( 
        <div className="counter">
        
        
        <div className="btn-container">
            <button className="control-btn" onClick={decrease}><div className='px-2 m-0 icon-btn'>-</div></button>
            <span className="counter-output mx-2 px-3  py-1" >{counter}</span>
            <button className="control-btn" onClick={increase}><div className='px-2 m-0 icon-btn'>+</div></button>
        </div>
        </div>
     );
}

export default ButtonCounter;