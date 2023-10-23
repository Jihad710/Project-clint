import { Helmet } from "react-helmet-async";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: userm = [] } = useQuery({
    queryKey: ["userm", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(userm);

  return (
    <div>
      <Helmet>
        <title>Melody | Dashboard Home</title>
      </Helmet>

      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="">
              <div className="rounded-r-md w-16 h-16">
                <img src={userm.photo} alt="" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mr-5">{userm?.name}</h1>
            <p className="py-6">Role : {userm?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
