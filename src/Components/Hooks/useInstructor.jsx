
import { useQuery } from '@tanstack/react-query';


import useAuth from './useAuth';
import axios from 'axios';

const useInstructor = () => {
  const { user, loading } = useAuth();
 
  const { data: isInstructor = [], isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !!user?.email  && !loading,
    queryFn: async () => {
      const res = await axios.get(`https://melody-school-server-jihad710.vercel.app/users/instructor/${user?.email}`);
      return res.data.instructor;
    }
  },);

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;