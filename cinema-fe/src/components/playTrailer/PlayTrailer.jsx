import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import './playTrailer.css'
function PlayTrailer( props ) {
    // console.log(props.linkTrailer)
    let linkTrailer=props.linkTrailer;
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }}
    return ( 
        
        <Modal className='modal-trailer'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            
        </Modal.Header>
        <Modal.Body>
        <YouTube videoId={linkTrailer} opts={opts} />
            
        </Modal.Body>
        
      </Modal>
     );
}

export default PlayTrailer;