import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Banner/photo-1593697972646-2f348871bd56.avif";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const {register, handleSubmit,formState: { errors },} = useForm();
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    axios.post('https://melody-school-server-jihad710.vercel.app/users',{name: data.name, email:data.email, photo:data.photoURL })
    .then(result => {
     


      const loggedUser = result.user;
      
      console.log(loggedUser)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User created successfully.',
        showConfirmButton: false,
        timer: 1500
    });
    
    navigate(from, { replace: true });
    })
    
  };

  return (
   <>
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={logo} alt="" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 max-w-sm">
        <label className="label">
          <span className="label-text font-medium">Name</span>
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="name"
          {...register("name", { required: true })}
          name="name"
          placeholder="Name"
        />
        <label className="label">
          <span className="label-text font-medium">Email</span>
          {errors.email && (
            <span className="text-red-600">Email field is required</span>
          )}
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          {...register("email", { required: true })}
          name="email"
          placeholder="Email"
        />
        <label className="label">
          <span className="label-text font-medium">Password</span>

          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
          name="password"
          placeholder="Password"
        />
        <label className="label">
          <span className="label-text font-medium">Confirm Password</span>
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.type === "required"
                ? "Confirm Password is required"
                : "Confirm Password does not match"}
            </span>
          )}
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="password"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <label className="label">
          <span className="label-text font-medium">Photo URL</span>
          {errors.photoURL && (
            <span className="text-red-600">Photo URL is required</span>
          )}
          
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="url"
          {...register("photoURL", { required: true })}
          name="photoURL"
          placeholder="Photo URL"
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Register
          </button>
        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-orange-400 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
   </>
  );
};

export default SignUp;