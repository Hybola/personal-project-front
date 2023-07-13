import Modal from "../../components/Modal";
import { useState } from "react";
import { useMenu } from "../../contexts/menuContext";
import { BinIcon } from "../../icons";

export default function DeleteMenuButton({ menuId }) {
  const [open, setOpen] = useState(false);
  const { deleteMenu } = useMenu();

  return (
    <div>
      <button
        className=" btn-error rounded-md flex p-1 "
        onClick={() => {
          setOpen(true);
        }}>
          <BinIcon/>
        delete
      </button>
      <Modal
        title="Do you want to delete this menu"
        open={open}
        onClose={() => setOpen(false)}>
        <button
          className="btn btn-error px-1 py-1 justify-center"
          onClick={() => deleteMenu(menuId)}>
          Yes, delete
        </button>
      </Modal>
    </div>
  );
}
