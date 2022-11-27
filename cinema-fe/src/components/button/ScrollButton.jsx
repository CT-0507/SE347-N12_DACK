import React, { useState, memo } from 'react';
import Button from 'react-bootstrap/Button';

const ScrollButton = memo(() => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button style={!visible ? { display: 'none' } : null} onClick={scrollToTop} className="fixed-bottom float-end w-100p mb-20">
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </Button>
  );
})

export default ScrollButton;