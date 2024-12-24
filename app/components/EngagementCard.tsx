'use client'
import React, { useState } from 'react';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { VscSparkleFilled } from 'react-icons/vsc';
import Image from 'next/image';
import EngageModal from './EngageModal';
import Ellipse from "../assets/Ellipse.png";

export default function EngagementCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Card */}
      <button 
        onClick={handleCardClick}
        className="text-left w-full"
      >
        <div className="border border-gray-200 rounded-3xl p-6 max-w-md bg-white hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src={Ellipse}
                alt="Profile"
                className="rounded-full"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 8V12L15 15"
                      stroke="#FB923C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-gray-900">Jane Reyes</h2>
              <p className="text-sm text-gray-600">COO • Northwind Traders</p>
            </div>
          </div>

          <div className="relative mt-4">
            <div className="bg-indigo-50 p-4 rounded-2xl">
              <div className="absolute -top-0.5 -right-0.5 w-6 h-6 bg-white" />
              <div className="absolute top-0 right-0 rounded-full">
                <VscSparkleFilled className="text-indigo-600 w-5 h-5 rounded-2xl translate-x-2 -translate-y-2" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-indigo-600">
                  <IoMailUnreadOutline size={20} />
                </div>
                <h2 className="font-semibold text-gray-900">Engage with Jane Reyes</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jane may be interested in upgrading espresso machines for her in-store coffee shops.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span>Expand business</span>
            <span className="font-bold text-gray-400">•</span>
            <span>High buying intent</span>
          </div>
        </div>
      </button>

      {/* Modal */}
      <EngageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}