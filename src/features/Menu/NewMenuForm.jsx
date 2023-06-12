import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function NewMenuForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      // console.log(formData);
      //   const token = await authApi.register(formData);
      // setPosToken(token.data.posToken);

      toast.success("New menu is created successful");
      onSucess();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* =========  Name ========== */}
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
      {/* ========= price ========== */}
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
      {/* =========   image  ========== */}
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

      {/* ========= Category========== */}
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

      {/* ========= Subimit button ========== */}
      <div className="grid place-items-end">
        <button className="btn btn-primary">Cancel</button>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}
