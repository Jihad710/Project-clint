
import image from '../../../assets/Banner/passionate-guy-in-headphones-holding-microphone-s-2022-06-16-14-59-42-utc-removebg-preview.png'
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <section className=" py-8 bg-[url('https://mozart.antstheme.com/wp-content/uploads/2022/08/background.png')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="w-1/2 space-y-5 mb-10">
              <h2 className="text-3xl space-x-4 ">Music is everybody’s possession. It’s only publishers who think that people own it.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nulla repellat odit obcaecati fuga voluptates harum iusto corporis facere ducimus!</p>
              <Link to='classes'
              ><button className='btn btn-outline btn-warning mt-7'>Register Now </button></Link>
              
            </div>
           

            <div className="w-1/2 text-center">
              <img
               
                src={image}
                alt="Image"
               
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Description;