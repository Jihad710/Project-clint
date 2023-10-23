


import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Fade} from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import useAuth from '../../components/hooks/useAuth';

import { useState } from 'react';
import { useCallback } from 'react';
import { useQuery } from "@tanstack/react-query";

const InstructorsMentor = () => {
  const [ setClassesInfo] = useState([]);
  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState([]);
  const [setIsCollapseLoading] = useState([]);

  const InstructorDetails = async (email) => {
    setIsCollapseLoading(true);
    const res = await axios.get(`https://melody-school-server-jihad710.vercel.app/classes/${email}`);
    console.log(res.data);
    setClassesInfo(res.data);
    setIsCollapseLoading(false);
  };

  const { user } = useAuth();

  const { data: instructorsMentor = [],  } = useQuery({
    queryKey: ['instructors', user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://melody-school-server-jihad710.vercel.app/instructors`)
      return res.data;
    }
  });

  const toggleCollapse = useCallback(
    (index) => {
      setIsButtonCollapseOpen((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    },
    []
  );

  return (
    <div>
      <Helmet>
        <title>Melody | Instructors</title>
      </Helmet>
      
        
     
 
      <h2 className='text-center text-2xl font-bold my-3 mb-10'>Our Instructor </h2>

      <div  className="grid  grid-cols-1 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
        {instructorsMentor.map((instructor, index) => (
          <Card key={instructor._id} className=''>
            <CardActionArea>
            <Fade cascade damping={0.1}>
              <CardMedia
              className='h-60'
                component="img"
                height="140"
                image={instructor.photo}
                alt="instructor"
              />
             
              <CardContent className='space-x-1'>
                <Typography gutterBottom variant="h5" component="div" className='my-0'>
                  {instructor.name}
                </Typography>
                <Typography gutterBottom variant="p" className='text-xs my-0' component="div">
                  Email: {instructor.email}
                </Typography>
                <Typography gutterBottom variant="p" className='text-xs my-0' component="div">
                  <div className="config">
                    <button
                      aria-controls={index}
                      aria-expanded={isButtonCollapseOpen[index]}
                      onClick={() => {
                        toggleCollapse(index);
                        InstructorDetails(instructor.email);
                      }}
                      type="button"
                      className='btn btn-link btn-info flex items-center px-0'>
                   
                    </button>
                  </div>
                </Typography>
                
              </CardContent>
              </Fade>
            </CardActionArea>
          </Card>
        ))}
      </div>
    
    </div>
  );
};

export default InstructorsMentor;
