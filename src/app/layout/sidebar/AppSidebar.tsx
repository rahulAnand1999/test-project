"use client";
import React, { useContext } from "react";
import AppMenu from "./AppMenu";
import { SidebarContext } from "@/app/context/sidebarcontext";

const AppSideBar = () => {
  const { menus } = useContext(SidebarContext);
  return <AppMenu menuItems={menus}></AppMenu>;
};

export default AppSideBar;
