import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import RegisterButton from "../features/auth/components/RegisterButton";
import * as authApi from "../api/auth-api";
import { setPosToken } from "../utils/localStorage";
import { useAuth } from "../contexts/authContext";

const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
export default function LoginPage() {
  const { setUserData, user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(LoginSchema) });

  const onSubmit = async (formData) => {
    try {
      const res = await authApi.login(formData);
      setPosToken(res.data.posToken);
      toast.success("You are logged in");
      const resFetchMe = await authApi.fetchMe();
      // console.log("loginPage/onSubmit",resFetchMe.data.user);
      setUserData(resFetchMe.data.user);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden ">
      <div className="w-full p-6 m-auto mt-24 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-orange-700">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="enter your email"
              className="w-full input input-bordered input-primary"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">password </span>
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full input input-bordered input-primary"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600">
            Forget Password?
          </a>
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex justify-center pt-1 bp-2">
          <RegisterButton btnName="Creat new restaurant" />
        </div>
      </div>
    </div>
  );
}
