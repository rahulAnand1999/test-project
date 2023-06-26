"use client";
import React, { useContext, useEffect } from "react";
import AppMenu from "./AppMenu";
import { SidebarContext } from "@/app/context/sidebarcontext";
import { AppMenuItem } from "@/app/types/layout";
import { EntityUtil } from "@/app/shared/utils/EntityUtil";
// import { getEntitys } from "@/app/HttpServices/EntityManagerService";

const AppSideBar = () => {
  const { menus, setMenus } = useContext(SidebarContext);

  return <AppMenu menuItems={menus}></AppMenu>;
};

export default AppSideBar;
