import React from 'react'
 import "../Footer/Footer.css";
const Footer = () => {
  const currentYear = (new Date()).getFullYear();
  return (
    <div className='footerdiv'>
     <p className='footertext'>Copyright {currentYear}. Rabbit and Tortoise Technology Solutions.</p> 
    </div>
  )
}

export default Footer