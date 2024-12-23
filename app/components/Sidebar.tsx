

// import React, { useState } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { BsClock } from "react-icons/bs";
// import { VscPinned } from "react-icons/vsc";
// import { FaUsers, FaClipboardList, FaShoppingCart } from "react-icons/fa";
// import { SidebarData } from "./SidebarData";

// const iconMap = {
//   AiOutlineHome,
//   BsClock,
//   VscPinned,
//   FaUsers,
//   FaClipboardList,
//   FaShoppingCart,
// };

// export default function Sidebar({ onItemClick }) {
//   return (
//     <aside
//       id="default-sidebar"
//       className="fixed top-0 left-0 z-40 w-64 h-screen border-r-4 transition-transform -translate-x-full sm:translate-x-0"
//       aria-label="Sidebar"
//     >
//       <div className="h-full px-4 py-6 overflow-y-auto bg-gray-50 ">
//         <div className="space-y-8">
//           {SidebarData.map((section) => (
//             <div key={section.title}>
//               <h3 className="text-sm font-semibold text-gray-500 uppercase ">
//                 {section.title}
//               </h3>
//               <ul className="mt-2 space-y-2">
//                 {section.links.map((link) => {
//                   const Icon = iconMap[link.icon];
//                   return (
//                     <li key={link.name}>
//                       <button
//                         onClick={() => onItemClick(link)}
//                         className="flex items-center p-2 w-full text-gray-900 rounded-lg hover:bg-gray-100 group"
//                       >
//                         <Icon />
//                         <span className="ml-3">{link.name}</span>
//                       </button>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }



import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { VscPinned } from "react-icons/vsc";
import { FaUsers, FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { SidebarData } from "./SidebarData";

const iconMap = {
  AiOutlineHome,
  BsClock,
  VscPinned,
  FaUsers,
  FaClipboardList,
  FaShoppingCart,
};

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();

  const handleItemClick = (link) => {
    router.push(link.path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen border-r-4 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-6 overflow-y-auto bg-gray-50">
        <div className="space-y-8">
          {SidebarData.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                {section.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {section.links.map((link) => {
                  const Icon = iconMap[link.icon];
                  const isActive = router.pathname === link.path;
                  
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() => handleItemClick(link)}
                        className={`flex items-center p-2 w-full rounded-lg group ${
                          isActive
                            ? "bg-gray-200 text-gray-600"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className={isActive ? "text-gray-600" : ""} />
                        <span className="ml-3">{link.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
