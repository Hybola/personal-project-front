import Modal from "../../components/Modal";
import NewMenuForm from "../../features/Menu/NewMenuForm";
import { useState } from "react";
import { useMenu } from "../../contexts/menuContext";

export default function EditMenuButton({ menu }) {
  const [open, setOpen] = useState(false);
  const {editMenu} = useMenu();

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setOpen(true);
        }}>
        Edit
      </button>
      <Modal title="Edit menu" open={open} onClose={() => setOpen(false)}>
        <NewMenuForm onSucess={() => setOpen(false)} menu={menu}/>
      </Modal>
    </div>
  );
}
