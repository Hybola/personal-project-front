import Bill from "../components/Bill";
import Card from "../layout/card";

export default function MenuPage() {
  return (
    <div className="flex justify-between w-full">
      <div>
        {/* <CardList/> */}
        <Card />
      </div>

      <div className="w-[300px]">
        <div className="bg-green">
          {/* <Bill /> */}
        </div>
      </div>
    </div>
  );
}
