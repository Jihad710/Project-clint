
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';




const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [ ], refetch } = useQuery({
    queryKey:['users'], 
    queryFn: async () => {
    const res = await axiosSecure.get('/users');
    return res.data;  
  }
    
  });




  const handleMakeAdmin = async (id) => {
    axios.patch(`https://melody-school-server-jihad710.vercel.app/users/admin/${id}`)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Make Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    
     
     
  }
  

  const handleMakeInstructor = async (id) => {
    axios.patch(`https://melody-school-server-jihad710.vercel.app/users/instructor/${id}`)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Make instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
  };

  return (
    <div>
      <Helmet>
        <title>Melody | Manage Users</title>
      </Helmet>

      <div>
        <p className=" font-semibold text-center mb-10 bg-gray- ">Total Users: {users.length}</p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Image</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users && users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <div className="font-semibold">{user.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-normal">{user.email}</div>
                  </div>
                </td>
                <td>
                <div className=" text-orange-400 font-bold">{user.role}</div> 
                </td>
                <th>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMakeInstructor(user._id)}
                      className="btn btn-xs bg-lime-400  hover:bg-red-500 hover:text-white"
                      disabled={user.role === 'instructor'}
                    >
                      Instructor
                    </button>
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs bg-yellow-400  hover:bg-red-500 hover:text-white"
                      disabled={user.role === 'admin' }
                    >
                      Admin
                    </button>
                  </div>
                </th>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
