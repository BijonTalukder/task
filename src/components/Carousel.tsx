import React from 'react'

function Carousel() {
  return (
    <div
    style={
        {margin:"15px",padding:"15px"}
    }
    >


<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1711558724~exp=1711562324~hmac=8255ea75718398d38ecebe67784beac92ddfc69b59f6f5c2dac1d1649f43044b&w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1711558724~exp=1711562324~hmac=8255ea75718398d38ecebe67784beac92ddfc69b59f6f5c2dac1d1649f43044b&w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1711558724~exp=1711562324~hmac=8255ea75718398d38ecebe67784beac92ddfc69b59f6f5c2dac1d1649f43044b&w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1711558724~exp=1711562324~hmac=8255ea75718398d38ecebe67784beac92ddfc69b59f6f5c2dac1d1649f43044b&w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Carousel