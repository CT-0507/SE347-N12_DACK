import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'



import "./btnLike.css";

function LikeButton(){
    const [liked,setLiked] = useState(false)
    let like='Like'
    
    if (liked){
        like='Liked'
    }
    const handleClick=()=>{
        setLiked(!liked)
    }
    
    return(
        <Button className={like} onClick={handleClick} style={{width:'90px'}}>
             <FontAwesomeIcon icon={faThumbsUp} className='me-1' />
             {like}
        </Button>
    )

}



export default LikeButton;