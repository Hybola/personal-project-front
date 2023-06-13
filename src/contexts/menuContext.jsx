import { createContext, useState, useContext, useEffect } from "react";
import * as menuApi from "../api/menu-api";
import { toast } from "react-toastify";

const MenuContext = createContext();

export default function MenuContextProvider(props) {
  const [allMenu, setAllMenu] = useState([
    {
      categoryId: 2,
      createdAt: "2023-06-13T09:01:01.125Z",
      id: 25,
      name: "coffee",
      price: "80",
      updatedAt: "2023-06-13T09:01:01.125Z",
      userId: 2,
    },
  ]);
  const [category, setCategory] = useState([]);

  const fetchMenus = async () => {
    try {
      const res = await menuApi.fetctAllMenu();
      const resCategory = await menuApi.fetchCategory();
      setAllMenu(res.data.allMenu);
      setCategory(resCategory.data.category);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const createMenu = async (input) => {
    try {
      const res = await menuApi.createMenu(input);

      setAllMenu([...allMenu, res.data.newMenu]);
      toast.success("New menu is created successfully");
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };
  const editMenu = async (menuId, input) => {
    try {
      const res = await menuApi.editMenu();
      const updatedMenuObj = res.data.newMenu;
      const foundedIndex = allMenu.findIndex((menu) => menu.id === menuId);
      if (foundedIndex !== -1) {
        const menuList = [...allMenu];
        menuList[foundedIndex] = {
          ...menuList[foundedIndex],
          ...updatedMenuObj,
        };
        setAllMenu(menuList);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteMenu = async (menuId) => {
    try {
      const res = await menuApi.deleteMenu(menuId);
      const menuList = allMenu.filter((menu) => menu.id !== menuId);
      setAllMenu(menuList);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const setMenuData = (value) => {
    setAllMenu(value);
  };
  return (
    <MenuContext.Provider
      value={{
        allMenu,
        category,
        setMenuData,
        createMenu,
        editMenu,
        deleteMenu,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => {
  return useContext(MenuContext);
};
