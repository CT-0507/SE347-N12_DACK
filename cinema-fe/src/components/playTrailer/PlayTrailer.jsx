import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import './playTrailer.css'
function PlayTrailer( {idVideo,...props }) {
    
    // let linktrailer=props.linkTrailer.toString();

    const opts = {
        height: '400',
        width: '100%',
        
        playerVars: {
          autoplay: 1
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
        <YouTube videoId={idVideo} opts={opts} style={{minWidth:'250'}} />
            
        </Modal.Body>
        
      </Modal>
     );
}

export default PlayTrailer;