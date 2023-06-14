import { useMenu } from "../../contexts/menuContext";
import OrderItem from "./OrderItem";

export default function CreateOrder() {
  const { cart, total, removeFromCart, removeAllCart } = useMenu();

  return (
    <div>
      <section
        className="antialiased bg-[#617A55] text-gray-600 h-screen px-4"
        x-data="app">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 m-3">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800">สั่งอาหาร</div>
            </header>
            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">รายการอาหาร</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">จำนวน</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">ราคา</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">แก้ไข</div>
                    </th>
                  </tr>
                </thead>
                {cart.map((el) => (
                  <OrderItem
                    key={el.id}
                    menu={el}
                    quantiy={1}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </table>
            </div>
            {/* total amount */}
            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
              <div>รวม</div>
              <div className="text-blue-600">
                {total} บาท <span x-text="total.toFixed(2)" />
              </div>
            </div>
            <div className="flex justify-end">
              {/* send this data to backend (note: use class 'hidden' to hide this input)  */}
              <input
                type="hidden"
                className="border border-black bg-gray-50"
                x-model="selected"
              />
            </div>
          </div>
          <div className="flex w-full justify-evenly">
            <button className="btn btn-error" onClick={() => removeAllCart()}>
              ยกเลิก
            </button>
            <button className="btn btn-success" >สั่งอาหาร</button>
          </div>
        </div>
      </section>
    </div>
  );
}
