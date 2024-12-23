"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function GlobalLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-grow bg-white p-4">
        <div>{children}</div>
      </div>
    </div>
  );
}