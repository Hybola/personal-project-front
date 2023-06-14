import Card from "../layout/card";
import { AddIcon } from "../icons";
import { useMenu } from "../contexts/menuContext";
import { useEffect } from "react";

export default function MenuPage() {
  const { allMenu, fetchMenus } = useMenu();
  // useEffect(()=>{
  //   fetchMenus()
  // },[])
  return (
    <>
      <div>
        <div className="flex p-3"></div>
        <div className="grid grid-cols-4 gap-3">
          {allMenu.map((el) => (
            <Card key={el.id} name={el.name} price={el.price} src={el.image}>
              <AddIcon className=" h-8 w-8" />
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-slate-200 w-[250px]">
        <div>Bill Component</div>
      </div>
    </>
  );
}
