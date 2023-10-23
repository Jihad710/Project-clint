import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const ManagePlan = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-20 mb-16">
        Manage your plan with billing details
      </h2>

      <div className="grid gap-0 grid-cols-1 md:grid-cols-3 mb-40">
        <div className="card bg-base-100 h-[300px] w-[300px]">
          <div className="card-body bg-yellow-200">
            <h2 className="text-center text-2xl mb-5">Beginner</h2>
            <div className="mb-5">
              <p className="text-3xl font-semibold text-center">
                69/<span className="text-xl">month</span>
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free 3x Class Meeting</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free Silver Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">2x Lunch time Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Certificate Guarantee</p>
              </div>
              <div className="card-actions flex justify-center mt-10">
              <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline   hover:bg-black font-medium">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 h-[300px] w-[300px]">
          <div className="card-body bg-teal-400">
            <h2 className="text-center text-2xl mb-5">Intermediete</h2>
            <div className="mb-5">
              <p className="text-3xl font-semibold text-center">
                99/<span className="text-xl">month</span>
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free 3x Class Meeting</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free Gold Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">3x Lunch time Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Certificate Guarantee</p>
              </div>
              <div className="card-actions flex justify-center mt-10">
              <Link className="hover:text-green-400" to="classes">
                  <button className="btn btn-outline   hover:bg-black font-medium">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 h-[300px] w-[300px]">
          <div className="card-body bg-yellow-200">
            <h2 className="text-center text-2xl mb-5">Master</h2>
            <div className="mb-5">
              <p className="text-3xl font-semibold text-center">
                269/<span className="text-xl">month</span>
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free 3x Class Meeting</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Free Diamond Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">3x Lunch time Facilities</p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <FaCheck className="mr-2" />
                <p className="text-left">Certificate Guarantee</p>
              </div>
              <div className="card-actions flex justify-center mt-10">
                <Link to='classes' className="hover:text-green-400" >
                  <button className="btn btn-outline   hover:bg-black font-medium">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePlan;
