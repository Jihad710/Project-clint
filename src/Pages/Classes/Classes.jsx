import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fade} from 'react-awesome-reveal';

import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../components/hooks/useAxiosSecure';

import { Helmet } from 'react-helmet';
import useAuth from '../../components/hooks/useAuth';

const Classes = () => {

  const { user } = useAuth()
  const [axiosSecure] =useAxiosSecure()
  const location = useLocation();



  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios(`https://melody-school-server-jihad710.vercel.app/approveClasses`)
      return res.data;
    }
  })
  console.log(classes)

  const handleSelectClass = (item) => {
    console.log(user)
    if (user === null) {
      Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: 'Please Login!',
        footer: '<a href="/login">Login Now</a>'
   
      })
    }
    
      const selectClass = {
        classID: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        email: user.email,
        instructorName : item.InstructorName 
      }
      console.log(selectClass)
      axios.post('https://melody-school-server-jihad710.vercel.app/selectClass', selectClass)
      .then(res=>{
        if(res.data.insertedId){
          refetch()
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'select class',
          showConfirmButton: false,
          timer: 1500
      })
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Class already selected',
          
          
          })
        }
      })
      
        
      
    }

    return (
      <div>
        <Helmet>
          <title>Melody | Classes</title>
        </Helmet>
      <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-semibold mb-10">Our Classes</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        {classes.map((item, i) => (
          <Fade cascade key={item._id}>
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                item.seats === 0 ? 'opacity-50' : ''
              }`}
            >
              <img className="h-64 w-full object-cover" src={item.image} alt={item.name} />
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold">{item.name}</h2>
                <p className="mb-2">Instructor Name: {item.InstructorName}</p>
                <p className="mb-2">Available Seats: {item.seats}</p>
                <p className="mb-2">Price: {item.price}</p>
              </div>
              <div className="p-6 bg-gray-100">
               
                <button disabled={item.seats === 0}
                  onClick={() => handleSelectClass(item)} className="btn btn-outline mt-8  hover:bg-black font-medium">
                    Add Class
                  </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
    </div>
    );
  };

  export default Classes;