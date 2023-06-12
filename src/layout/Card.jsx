import krapaoKai from "../../public/กระเพราไก่ไข่ดาว.jpg";
import { AddIcon } from "../icons/index";
export default function Card() {
  return (
    <div className="card card-compact w-48 bg-base-100 shadow-xl">
      <figure>
        <img src={krapaoKai} alt="menu image" />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title ">กระเพราไก่ไข่ดาว</h2>
        <div className="flex items-center">
          <p>80 บาท</p>
          <AddIcon className=" h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
