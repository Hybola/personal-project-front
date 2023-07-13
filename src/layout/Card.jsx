import { DEFAULT_MENU_IMAGE } from "../config/env";
export default function Card({ src, name, price, children, button }) {
  return (
    <div className="card card-compact w-48 bg-base-100 shadow-xl">
      <figure>
        <img
          src={src || DEFAULT_MENU_IMAGE}
          alt="menu image"
          className="bg-[#F7E1AE] h-40 w-48"
        />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title ">{name}</h2>
        <div className=" flex justify-between">
          <p>{price} บาท</p>
          <div>{button}</div>
        </div>
        <div className="flex items-center justify-end">{children}</div>
      </div>
    </div>
  );
}
