import React from 'react'
import {Carousel} from 'react-bootstrap'


function BootstrapCarousel() {

    return (
        <div className = "colored-section">
  
        <Carousel className = "windows">
  <Carousel.Item>
    <h2 className = "testimonial">"Mike jumped into our web-development needs and quickly boosted the quality and professionalism of our website. He was responsive and delivered on all the points we brainstormed. If asked the right questions, he can articulate the underlying need, and is able to work independently to achieve the desired scope. Thanks Mike for all the hard work."</h2> 
    
    <Carousel.Caption>
      <h3 className = "name">Tom Skrinskas</h3>
      <p className = "names" >Vancouver, Canada</p>
      <p className = "names" >Ascencion Sciences</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <h2 className = " testimonial">"I had the pleasure of working with Mike on a website development project on WordPress for Ascension Sciences Inc. From day one, Mike was professional, personable, and became an invaluable part of the team. Well-versed in HTML and CSS, he improved our site's responsiveness across devices and optimized formatting on all pages. Not only did he tackle our list of requests in record time, Mike also came to the table with creative ideas. I would recommend Mike to anyone looking for support in all-things web development!"</h2>  
    
    <Carousel.Caption>
      <h3 className = "name">Melody Lin</h3>
      <p className = "names" >Vancouver, Canada</p>
      <p className = "names" >Ascencion Sciences</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <h2 className = "testimonial">"I really recommend Michael Acton’s work. He created a website for my campaign as a City Councillor. He asked all the right questions to get to know what my vision is. I’ve received so many incredible comments about my website. It’s inviting, state of the art and easy to access. Thank you!"</h2>
    
    
    <Carousel.Caption>
      <h3 className = "name">Karina Reid</h3>
      <p className = "names">Richmond, Canada</p>
      <p className = "names" >Canadian Politician</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
         </div>
    )
}


export default BootstrapCarousel; 