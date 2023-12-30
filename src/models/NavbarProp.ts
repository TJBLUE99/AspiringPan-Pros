import { ReactNode } from "react";
import MenuItemProp from "./MenuItemProp";

type NavbarProp = {
  menuItems: Array<MenuItemProp>;
  logo: ReactNode;
};

export default NavbarProp;
