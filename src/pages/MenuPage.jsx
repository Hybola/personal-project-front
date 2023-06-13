import Bill from "../components/Bill";
import Card from "../layout/card";
import { AddIcon } from "../icons";
export default function MenuPage() {
  return (
    <div className="flex justify-between w-full">
      <div>
      <Card name={"กระเพราไก่ไข่ดาว"} price={"80"} > <AddIcon className=" h-8 w-8" /></Card>
      
      </div>

      <div className="w-[300px]">
        <div className="bg-green">
          {/* <Bill /> */}
        </div>
      </div>
    </div>
  );
}
