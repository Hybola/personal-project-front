import defaultMenuImage from "../../public/quesadilla-svgrepo-com.svg";
export default function Card({ src,name,price,children }) {
  return (
    <div className="card card-compact w-48 bg-base-100 shadow-xl">
      <figure>
        <img
          src={src || defaultMenuImage}
          alt="menu image"
          className="bg-[#F7E1AE]"
        />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title ">{name}</h2>
        <div className="flex items-center">
          <p>{price}</p>
          {children}
         
        </div>
      </div>
    </div>
  );
}
