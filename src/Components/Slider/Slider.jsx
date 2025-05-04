import React from 'react';
import CofarenceImg1 from '..//../assets/confarence_img_1.jpg'
import CofarenceImg2 from '..//../assets/confarence_img_2.jpg'
import CofarenceImg3 from '..//../assets/confarence_img_3.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={CofarenceImg1}
      className="w-full h-[55%]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <div className='absolute'>
      <h2 className='relative bottom-8 left-120 text-3xl text-end text-white'>Empowering Business Leaders of Tomorrow</h2>
      <p className='relative bottom-5 left-120 text-end text-lg text-white'>Join visionary entrepreneurs, investors, and innovators to shape the future of business</p>
      </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={CofarenceImg2}
      className="w-full h-[55%]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <div className='absolute'>
      <h2 className='relative bottom-8 left-120 text-3xl text-end text-white'>Where Ideas Meet Opportunities
      </h2>
      <p className='relative bottom-5 left-120 text-end text-lg text-white'>Connect, collaborate, and grow with industry experts and global thinkers</p>
      </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
     src={CofarenceImg3}
      className="w-full h-[55%]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <div className='absolute'>
      <h2 className='relative bottom-8 left-120 text-3xl text-end text-white'>Unlock Growth. Build Networks. Lead the Change</h2>
      <p className='relative bottom-5 left-120 text-end text-lg text-white'>Experience a transformative conference tailored for ambitious professionals and startups</p>
      </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;