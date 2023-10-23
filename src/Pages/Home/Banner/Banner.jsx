
import img1 from '../../../assets/Banner/piano.avif';
import img2 from '../../../assets/Banner/img1.jpg';
import { Link } from 'react-router-dom';




const Banner = () => {
  return (
    <div className="carousel w-full h-[700px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className='rounded-xl w-full' />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0] ">
            <div className='text-white space-y-7 w-1/2 pl-24'>
                <h2 className='text-6xl font-bold'>Grow your skills for free with Melody</h2>
                <p>Our class is where your passions come into play every day.</p>
                <div>
                    
               
                <Link to='/classes'><button className="btn btn-outline btn-primary">Join With Us</button></Link>
                </div>
                
            </div>
          </div>
          
          <a href="#slide1" className=" text-white absolute top-1/2 left-5 transform -translate-y-1/2 z-10">❮</a>
      <a href="#slide2" className=" text-white absolute top-1/2 right-5 transform -translate-y-1/2 z-10">❯</a>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className='rounded-xl w-full' />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0] ">
           
          </div>
          <a href="#slide1" className=" text-white absolute top-1/2 left-5 transform -translate-y-1/2 z-10">❮</a>
      <a href="#slide" className=" text-white absolute top-1/2 right-5 transform -translate-y-1/2 z-10">❯</a>
        </div> 
         
        
        
       
      
      </div>
  );
};

export default Banner;
