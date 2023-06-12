import Modal from "../components/Modal";
import NewMenuForm from "../features/Menu/NewMenuForm";
import {useState} from "react"

export default function SetUpPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setOpen(true);
        }}>
        Create new Menu
      </button>
      <Modal title="Register" open={open} onClose={() => setOpen(false)}>
        <NewMenuForm onSucess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
