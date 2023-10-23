import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
   
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes' , user?.email],
        

        queryFn: async()=>{
            const res = await axiosSecure.get(`/classes?email=${user?.email}`)
            return res.data;
        }
    })
    return [classes, refetch];
};

export default useClass;