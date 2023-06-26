import { AppMenuItem } from "@/app/types/layout";
import { RouterPath } from "./routing";

export const menus:AppMenuItem[] = [
    {
      label: "Administration",
      items: [
        {
          label: "Administration",
          icon: "pi pi-fw pi-home",
          to: RouterPath.MAIN,
        },
      ],
    }
  ];