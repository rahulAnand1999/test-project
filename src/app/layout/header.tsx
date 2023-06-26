"use client";
import React from "react";
import Image from 'next/image';
const Header = ({ setMenu, menuOpen }: any) => {
  return (
    <div>
    <div className="layout-topbar">
        <div className="layout-topbar-logo">
          {/* <Image src="/images/bipros-logo-menubar.png" alt="" width={50} height={50}/> */}
          <span>BIPros</span>
        </div>

        <button
          type="button"
          className="p-link layout-menu-button layout-topbar-button"
          onClick={(e: any) => 
            setMenu(!menuOpen)}
        >
          <i className="pi pi-bars" />
        </button>

        <button
          type="button"
          className="p-link layout-topbar-menu-button layout-topbar-button"
        >
          <i className="pi pi-ellipsis-v" />
        </button>

        <div className="layout-topbar-menu">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-calendar"></i>
            <span>Calendar</span>
          </button>
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-user"></i>
            <span>Profile</span>
          </button>
          <div>
            <button type="button" className="p-link layout-topbar-button">
              <i className="pi pi-cog"></i>
              <span>Settings</span>
            </button>
          </div>
        </div>
    </div>

   </div>
  );
};

export default Header;
