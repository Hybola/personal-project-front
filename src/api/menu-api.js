import thisAxios from "./thisAxios";
export const fetctAllMenu = () => thisAxios.get("/menu/");
export const createMenu = (input) => thisAxios.post("/menu/create", input);
export const editMenu = (menuId, input) =>
  thisAxios.patch(`/menu/${menuId}`, input);
export const deleteMenu = (menuId) => thisAxios.delete(`/menu/${menuId}`);
export const fetchCategory = () => thisAxios.get("/category");
