



import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useSelectedClasses from '../../components/hooks/useSelectedClasses';


//stripe key
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key);

const Payment = () => {
    const { id } = useParams();

    const [selectedClasses] = useSelectedClasses()
    
    const selectedClass = selectedClasses.find(cls => cls?._id === id);
    console.log(selectedClass)



    return (
        <div>
            <Helmet>
                <title>Melody | Payment</title>
            </Helmet>
            

            <Elements stripe={stripePromise}>
                <CheckOutForm selectedClass={selectedClass}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;