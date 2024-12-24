// import React from 'react';
// import { IoMailUnreadOutline, IoClose } from 'react-icons/io5';
// import { LuSparkles } from 'react-icons/lu';
// import Image from 'next/image';
// import Ellipse from "../assets/Ellipse.png";

// export default function EngageModal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 relative">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 flex items-center justify-center">
//               <IoMailUnreadOutline className="text-indigo-600 w-5 h-5" />
//             </div>
//             <h2 className="font-semibold text-lg">Engage with Jane Reyes</h2>
//           </div>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <IoClose size={24} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {/* Profile Section */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="relative w-12 h-12">
//               <Image
//                 src={Ellipse}
//                 alt="Profile"
//                 className="rounded-full"
//                 fill
//                 style={{ objectFit: 'cover' }}
//               />
//               <div className="absolute -top-1 -right-1">
//                 <Image
//                   src="/linkedin-icon.png"
//                   alt="LinkedIn"
//                   width={20}
//                   height={20}
//                 />
//               </div>
//             </div>
//             <div>
//               <h3 className="font-semibold">Jane Reyes</h3>
//               <p className="text-sm text-gray-600">COO, Northwind Traders</p>
//             </div>
//           </div>

//           {/* Message Section */}
//           <div className="bg-indigo-50 rounded-lg p-4 mb-6">
//             <p className="text-gray-700">
//               Jane may be interested in upgrading espresso machines for her in-store coffee shops.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
//                 Engage
//               </button>
//               <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
//                 Reach out
//               </button>
//             </div>
//           </div>

//           {/* Why Section */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-semibold">Why I picked this lead</h3>
//               <LuSparkles className="text-indigo-600 w-5 h-5" />
//             </div>
//             <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
//               <li>Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.</li>
//               <li>Multiple people at her company have reported 'slowness' during service requests</li>
//               <li>Northwind Traders currently use $200M in revenue from their in-store coffee shops</li>
//             </ul>
//           </div>

//           {/* Stats Section */}
//           <div className="flex gap-8 mb-6">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                 <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-medium">Decision maker</div>
//                 <div className="text-sm text-gray-600">Yes</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
//                 <span className="text-yellow-600">$</span>
//               </div>
//               <div>
//                 <div className="text-sm font-medium">Potential deal value</div>
//                 <div className="text-sm text-gray-600">$1M</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                 <span className="text-purple-600">↗</span>
//               </div>
//               <div>
//                 <div className="text-sm font-medium">Intent</div>
//                 <div className="text-sm text-gray-600">High</div>
//               </div>
//             </div>
//           </div>

//           {/* About Section */}
//           <div>
//             <h3 className="font-semibold mb-2">About Jane</h3>
//             <p className="text-sm text-gray-600">
//               Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service.
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-between p-4 border-t">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-gray-600">Showing 1 of 9</span>
//             <button className="text-blue-600 text-sm">Show all</button>
//           </div>
//           <div className="flex gap-2">
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//               </svg>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { IoClose } from 'react-icons/io5';
import { LuSparkles } from 'react-icons/lu';
import { FaPen } from 'react-icons/fa';
import Image from 'next/image';
import Ellipse from "../assets/Ellipse.png";
import { BsEnvelopeCheck } from "react-icons/bs";

export default function EngageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
            <div className='flex items-center'>
                <BsEnvelopeCheck className='text-blue-700' />
                <h2 className="font-semibold pl-1">Engage with Jane Reyes</h2>
            </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoClose size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex items-center gap-2 mb-6">
            <Image
              src={Ellipse}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-medium">Jane Reyes</span>
                <Image
                  src="/linkedin-icon.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </div>
              <span className="text-sm text-gray-600">COO, Northwind Traders</span>
            </div>
          </div>

          {/* Message Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-xl">↗</span>
                <span>Jane may be interested in upgrading espresso machines for her in-store coffee shops.</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <FaPen size={14} className="text-gray-600" />
                </button>
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm">
                  Approve and send
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50 text-sm">
                Engage
              </button>
              <div className="flex items-center">
                <span className="text-2xl cursor-pointer">👆</span>
                <span className="text-gray-600 text-sm ml-1">Reach</span>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Why I picked this lead</h3>
              <LuSparkles className="text-blue-600 w-5 h-5" />
            </div>
            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
              <li>Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.</li>
              <li>Multiple people at her company have reported 'slowness' during service requests</li>
              <li>Northwind Traders currently use $200M in revenue from their in-store coffee shops</li>
            </ul>
          </div>

          {/* Stats Section */}
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Decision maker</div>
                <div className="text-sm font-medium">Yes</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600">$</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Potential deal value</div>
                <div className="text-sm font-medium">$1M</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">↗</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Intent</div>
                <div className="text-sm font-medium">High</div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">About Jane</h3>
            <p className="text-sm text-gray-600">
              Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing 1 of 9</span>
              <button className="text-blue-600 text-sm">Show all</button>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-600">👎</button>
              <button className="text-gray-600">👍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}