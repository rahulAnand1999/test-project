"use client";
import { PropsWithChildren, useState, memo } from 'react';
import Header from './header';
import AppSideBar from './sidebar/AppSidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Appconfig = ({ children }: PropsWithChildren) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const path = usePathname();

  return (
    <div className={menuOpen ? "layout-wrapper layout-theme-light layout-static p-ripple-disabled" : "layout-wrapper layout-theme-light layout-static layout-static-inactive p-ripple-disabled"}>
      <Header setMenu={setMenuOpen} menuOpen={menuOpen} />
      <div className="layout-sidebar">
        <AppSideBar />
      </div>
      <div className='layout-main-container'>
        <div className='layout-main'>
          <div className="">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

}
export default memo(Appconfig);