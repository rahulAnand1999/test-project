"use client";
import React, { createContext, useState } from "react";
import { AppMenuItem, ChildContainerProps } from "../types/types";
import { menus } from "../shared/constants/menu";


 const initialMenu: AppMenuItem[] = menus

export interface MenuItemContextProps {
  menus: AppMenuItem[];
  setMenus: React.Dispatch<React.SetStateAction<AppMenuItem[]>>;
}
export const SidebarContext = createContext({} as MenuItemContextProps);

export const SidebarProvider = ({ children }: ChildContainerProps) => {
  const [menus, setMenus] = useState(initialMenu);
  const value = {
    menus,
    setMenus,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
