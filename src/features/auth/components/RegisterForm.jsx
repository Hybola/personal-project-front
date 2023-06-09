import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { toast } from "react-toastify";

import * as authApi from "../../../api/auth-api";
import { setPosToken } from "../../../utils/localStorage";

const RegisterSchema = Joi.object({
  username: Joi.string().trim().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
  password: Joi.string().min(3).required(),
  confirmPassword: Joi.ref("password"),
  restaurantName: Joi.string().min(3).required(),
}).options({ allowUnknown: true });

export default function RegisterForm({ onSucess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(RegisterSchema),
  });

  const onSubmit = async (formData) => {
    try {
      // console.log(formData);
      const token = await authApi.register(formData);
      setPosToken(token.data.posToken);
      toast.success("Register is successful");
      onSucess();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* =========  username ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">username</span>
        </label>
        <input
          type="text"
          placeholder="enter username..."
          className="w-full input input-bordered input-primary"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>
      {/* ========= email ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">email</span>
        </label>
        <input
          type="text"
          placeholder="enter email...."
          className="w-full input input-bordered input-primary"
          {...register("email")}
        />
        {errors.restaurantName && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>
      {/* =========   Password   ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter password..."
          className="w-full input input-bordered input-primary"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* ========= confirmPassword========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Confirm password</span>
        </label>
        <input
          type="password"
          placeholder="Confirm Password..."
          className="w-full input input-bordered input-primary"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">Confirm password not match..</p>
        )}
      </div>
      {/* ========= Restaurant Name ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Your restaurant name</span>
        </label>
        <input
          type="text"
          placeholder="restaurant name...."
          className="w-full input input-bordered input-primary"
          {...register("restaurantName")}
        />
        {errors.restaurantName && (
          <p className="text-red-500">Please enter your restaurant name</p>
        )}
      </div>
      {/* ========= Subimit button ========== */}
      <div className="grid place-items-end">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}
