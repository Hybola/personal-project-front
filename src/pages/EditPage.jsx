import Modal from "../components/Modal";
import { useMenu } from "../contexts/menuContext";
import EditMenuButton from "../features/Menu/EditMenuButton";
import NewMenuForm from "../features/Menu/NewMenuForm";
import { useState } from "react";
import Card from "../layout/Card";
import DeleteMenuButton from "../features/Menu/DeleteMenuButton";
import { AddIcon } from "../icons";

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
          <AddIcon className=" h-8 w-8 " />
          Create new Menu
        </button>
        <Modal
          title="Create new menu"
          open={open}
          onClose={() => setOpen(false)}>
          <NewMenuForm onSucess={() => setOpen(false)} />
        </Modal>
      </div>
      <div className="w-full flex justify-evenly gap-4">
      <div className="flex p-3"></div>
        <div className="grid grid-cols-4 gap-3">
          {allMenu.map((el) => (
            <Card key={el.id} name={el.name} price={el.price} src={el.image}>
              <p>{`ID:${el.id}`}</p>
              <div className="flex gap-2">
                <EditMenuButton menu={el} />
                <DeleteMenuButton menuId={el.id} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
