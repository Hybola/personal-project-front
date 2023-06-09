import Modal from "../../../components/Modal";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

export default function RegisterButton({ btnName }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide"
        onClick={() => {
          setOpen(true);
        }}>
        {btnName}
      </button>
      <Modal title="Register" open={open} onClose={() => setOpen(false)}>
        <RegisterForm onSucess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
