import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import useSelectedClasses from '../../../components/hooks/useSelectedClasses';
import useAuth from '../../../components/hooks/UseAuth';
import { MdDeleteOutline, MdPayment } from 'react-icons/md';


const SelectedClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const [selectedClasses, refetch] = useSelectedClasses();
    console.log(selectedClasses);

    const handleDelete = (selectedClass) => {
        axiosSecure.delete(`/selectedClasses/${selectedClass._id}`).then((res) => {
            if (res.data.deletedCount) {
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Deleted`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Melody | Selected Classes</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    <thead>
                        <tr className="animate__animated animate__fadeIn">
                            <th></th>
                            <th>Image</th>
                            <th className="text-left">Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses.map((selectedClass, index) => (
                            <tr key={selectedClass._id} className="border-none animate__animated animate__backInDown">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-r-md w-16 h-16">
                                            <img src={selectedClass?.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-left">
                                        <div className="font-semibold">{selectedClass.name}</div>
                                        <div className="font-medium text-xs">Instructor: {selectedClass?.instructorName}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-normal">{selectedClass?.price}</div>
                                    </div>
                                </td>
                                <td>
                                    {selectedClass?.seats !== 0 ? (
                                        <div className="text-yellow-500 font-bold">Available</div>
                                    ) : (
                                        0
                                    )}
                                </td>
                                <th>
                                    <Link to={`/dashboard/payment/${selectedClass._id}`}>
                                        <div className='ml-20'>
                                        <button className=" px-3 bg-pink-400 hover:bg-black py-2 rounded-md text-white flex items-center">
                                            <span className=""></span> <MdPayment className="text-xl" />
                                        </button>
                                        </div>
                                    </Link>
                                </th>
                                <th>
                                    <button className='px-3 bg-red-500 hover:bg-black py-2 rounded-md text-white' onClick={() => handleDelete(selectedClass)}>
                                    <span className=""></span> <MdDeleteOutline className="text-xl" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;
