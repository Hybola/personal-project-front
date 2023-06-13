import Modal from "../components/Modal";
import { useMenu } from "../contexts/menuContext";
import EditMenuButton from "../features/Menu/EditMenuButton";
import NewMenuForm from "../features/Menu/NewMenuForm";
import { useState } from "react";
import Card from "../layout/card";
import DeleteMenuButton from "../features/Menu/DeleteMenuButton";

export default function EditPage() {
  const [open, setOpen] = useState(false);
  const { allMenu, deleteMenu } = useMenu();

  return (
    <div>
      <div className="flex p-10">
        <button
          className="btn btn-primary "
          onClick={() => {
            setOpen(true);
          }}>
          Create new Menu +
        </button>
        <Modal
          title="Create new menu"
          open={open}
          onClose={() => setOpen(false)}>
          <NewMenuForm onSucess={() => setOpen(false)} />
        </Modal>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {allMenu.map((el) => (
          <Card key={el.id} name={el.name} price={el.price} src={el.image}>
            <EditMenuButton menu={el} />
            <DeleteMenuButton menuId={el.id} />
          </Card>
        ))}
      </div>
    </div>
  );
}
