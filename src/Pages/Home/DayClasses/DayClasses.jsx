import { Link } from "react-router-dom";
import vocal from "../../../assets/Banner/Vocal.png";
import sexophone from "../../../assets/Banner/Saxophone.png";
import guitar from "../../../assets/Banner/guitar.png";
import drum from "../../../assets/Banner/Drum.png";
import ScrollToTop from "react-scroll-to-top";

const DayClasses = () => {
 
  return (
    
    <section>
       <ScrollToTop smooth />
      <div className="text-4xl  font-semibold mb-16 mt-20 flex justify-between items-center">
        <h2>
          Our class is where your passions
          <br />
          come into play every day.
        </h2>
       <Link to='classes'> <button className="relative border-2 text-2xl font-light border-gray-400 bg-transparent py-2.5 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
  Register Now 
</button></Link>

      </div>

      <div className="card bg-base-100 grid grid-cols-1 md:grid-cols-3">
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={vocal} alt="" />
            Vocal Practice
          </h2>
          <p>12k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline mt-8  hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={sexophone} alt="" />
            Sexophone Practice
          </h2>
          <p>14k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline  mt-8 hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={guitar} alt="" />
            Guitar Practice
          </h2>
          <p>12k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline  mt-8 hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={drum} alt="" />
            Drum Practice
          </h2>
          <p>12k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline mt-8  hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={drum} alt="" />
            Drum Practice
          </h2>
          <p>12k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline mt-8  hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
        <div className="card-body hover:bg-yellow-200">
          <h2 className="card-title">
            <img className="w-8 h-11 " src={drum} alt="" />
            Drum Practice
          </h2>
          <p>12k Students</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
            beatae repudiandae repellendus voluptate non iste sint tempora vitae
            accusamus?
          </p>
          <div className="card-actions mr-3">
           <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline mt-8  hover:bg-black font-medium">
                    More Details
                  </button>
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayClasses;
