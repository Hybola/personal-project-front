import Card from "../layout/card";
import { AddIcon } from "../icons";
import { useMenu } from "../contexts/menuContext";
import { useEffect } from "react";
import CreateOrder from "../features/Order/CreateOrder";

export default function MenuPage() {
  const { allMenu, addToCart } = useMenu();
  useEffect(()=>{
  },[])
  return (
    <>
      <div className="w-full flex justify-evenly gap-4">
        <div>
          <div className="flex p-3"></div>
          <div className="grid grid-cols-4 gap-3">
            {allMenu.map((el) => (
              <Card key={el.id} name={el.name} price={el.price} src={el.image}>
                <AddIcon className=" h-8 w-8" onClick={() => addToCart(el)} />
              </Card>
            ))}
          </div>
        </div>

        <div>
          <CreateOrder />
        </div>
      </div>
    </>
  );
}
