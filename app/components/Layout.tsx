"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      {/* Main Content Area */}
      <div className="flex-1 left-0  overflow-y-auto overflow-x-hidden bg-[#F9FAFB] p-6 md:ml-64">
        {/* Add a button to toggle the sidebar */}
        <button
          className="absolute top-4 left-4 z-50 p-2 text-gray-800 rounded-lg shadow md:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        {children}
      </div>
    </div>
  );
}
