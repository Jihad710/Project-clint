import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
      googleSignIn()
          .then(result => {
              const loggedInUser = result.user;
              console.log(loggedInUser);
              const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
              fetch('https://melody-school-server-jihad710.vercel.app/users', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
              })
                  .then(res => res.json())
                  .then(() => {
                      navigate(from, { replace: true });
                  })
          })
  }
    return (
        <div className="text-center md:text-left">
          <label className="mr-5">Sign in with</label>
          <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
          
        </div>
    );
};

export default SocialLogin;