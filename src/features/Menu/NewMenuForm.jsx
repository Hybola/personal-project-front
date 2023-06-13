import { useForm } from "react-hook-form";
import { useMenu } from "../../contexts/menuContext";
import { useState } from "react";

export default function NewMenuForm({ onSucess, menu }) {
  const { createMenu, category } = useMenu();
  const [file, setFile] = useState(null);
  console.log("menu", menu);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: menu,
  });
  const onSubmit = (formData) => {
    const formData2 = new FormData();
    if (file) formData2.append("image", file); // ชื่อ image ตามใน database
    if (formData.name) formData2.append("name", formData.name);
    if (formData.price) formData2.append("price", formData.price);
    if (formData.categoryId == "Rice") formData2.append("categoryId", 1);
    if (formData.categoryId == "Drink") formData2.append("categoryId", 2);
    if (formData.categoryId == "Dessert") formData2.append("categoryId", 3);

    for (var pair of formData2.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    createMenu(formData2);
    onSucess();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* =========  Name ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="enter menu name..."
          className="w-full input input-bordered input-primary"
          {...register("name")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>
      {/* ========= price ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Price</span>
        </label>

        <input
          type="number"
          placeholder="enter price...."
          className="w-full input input-bordered input-primary"
          {...register("price")}
        />
        {errors.restaurantName && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>
      {/* =========   image  ========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Upload one image</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          onChange={(e) => {
            if (e.target.files[0]) setFile(e.target.files[0]);
          }}
        />
      </div>

      {/* ========= CategoryId========== */}
      <div>
        <label className="label">
          <span className="text-base label-text">Selct category</span>
        </label>
        <select
          className="select select-primary w-full max-w-xs"
          {...register("categoryId")}>
          <option disabled>Please select one category?</option>
          {/* {category.map((el) => (
            <option>el.name</option>
          ))} */}
          <option>Rice</option>
          <option>Drink</option>
          <option>Dessert</option>
        </select>
      </div>

      {/* ========= Subimit button ========== */}
      <div className=" ">
        <button className="btn btn-primary w-full" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
