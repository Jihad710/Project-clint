import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import useAuth from '../../../components/hooks/useAuth';
import Swal from 'sweetalert2';

const PopularClasses = () => {
  const { user } = useAuth();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios('https://melody-school-server-jihad710.vercel.app/popularClasses');
      return res.data;
    }
  });

  console.log(classes);

  const handleSelectClass = (item) => {
    if (user === null) {
      Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: 'Please Login!',
        footer: '<a href="/login">Login Now</a>'
      });
    }

    const selectClass = {
      classID: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      email: user.email,
      instructorName: item.InstructorName
    };

    axios.post('https://melody-school-server-jihad710.vercel.app/selectClass', selectClass)
      .then(res => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'select class',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  return (
    <>
      <h2 className="text-center font-semibold text-2xl">Popular Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-10">
        {classes.map((item, i) => (
          <div data-theme="pastel" key={i}>
            <Fade>
              <Card className="hover:bg-primary hover:bg-opacity-20" sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      <span className="text-sm font-semibold ">{item?.name}</span>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <span className="text-sm font-semibold ">Price: {item?.price}</span>
                      <br />
                      <span className="text-sm font-semibold">Total Enrolled: {item?.TotalEnrolled}</span>
                      <br />
                      <span className="text-sm font-semibold">Available Seats: {item?.seats}</span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button
                      disabled={item?.seats === 0}
                      onClick={() => handleSelectClass(item)}
                      className=""
                      color="info"
                      size="medium"
                      variant="contained"  
                      sx={{
                        
                        borderWidth: '2px', 
                        borderColor: 'warning.main',  
                        '&:hover': {
                            
                          borderColor: 'warning.dark',  
                        }
                      }}
                    >
                      Enroll now
                    </Button>
                  </CardActions>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={item.image}
                  alt="Live from space album cover"
                />
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
