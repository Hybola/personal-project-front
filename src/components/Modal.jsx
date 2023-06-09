import { useEffect } from "react";
import { createPortal } from "react-dom";

//onClick={e=>e.stopPropagation()} เป็นการสั่งให้หยุดส่ง event ไปให้ div ที่เป็น parent

export default function Modal({ title, children, width = 27, open, onClose }) {
  ////====ถ้า modal เปิด background หลัง modal จะscroll ไม่ได้
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // createPortal รับ parameter ตัว
  // createPortal( (react node),document.getElementByid("modal")
  return createPortal(
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-60 z-20"> </div>
          <div className="fixed inset-0 z-30" onMouseUp={onClose}>
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                style={{ maxWidth: `${width}rem` }}
                onMouseUp={(e) => e.stopPropagation()}
                className={`bg-white rounded-lg w-full shadow-[0_0_15px_rgb(0_0_0/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]`}>
                <div className="flex justify-between items-center p-4 border-b text-xl ">
                  <div className="invisible">&#10005;</div>
                  <div className="font-bold">{title}</div>
                  <div
                    className="text-gray-500 hover:text-gray-600"
                    role="button"
                    onClick={onClose}>
                    &#10005;
                  </div>
                </div>
                <div className="p-4 overflow-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
}
