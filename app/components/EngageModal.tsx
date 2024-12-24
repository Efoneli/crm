import React from 'react';
import { IoClose } from 'react-icons/io5';
import { LuSparkles } from 'react-icons/lu';
import { FaPen } from 'react-icons/fa';
import Image from 'next/image';
import Ellipse from "../assets/Ellipse.png";
import { BsEnvelopeCheck } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { VscSparkleFilled } from 'react-icons/vsc';
import { LuSendHorizontal } from "react-icons/lu";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { TbShieldPin } from "react-icons/tb";
import { BsFillRecordCircleFill } from "react-icons/bs";

interface EngageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EngageModal: React.FC<EngageModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16">
      <div className="bg-gray-50 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white">
            <div className='flex items-center'>
                <BsEnvelopeCheck className='text-blue-700' />
                <h2 className="font-semibold text-gray-700 pl-1">Engage with Jane Reyes</h2>
            </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoClose size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-scroll max-h-[75vh] rounded-xl p-4">
          {/* Profile Section */}
          <div className="flex items-center gap-2 mb-6 bg-white rounded-xl w-full p-2">
            <Image
              src={Ellipse}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col ">
              <div className="flex items-center gap-2">
                <span className="font-medium">Jane Reyes</span>
                
              </div>
              <span className="text-sm text-gray-600 flex items-center"><FaLinkedin className='text-blue-600 pr-1' /> COO, Northwind Traders</span>
            </div>
          </div>

          {/* Message Section */}
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="bg-blue-100 p-2 rounded-xl flex flex-col items-center justify-between mb-4 xl:flex-row">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-xl"><VscSparkleFilled /></span>
                <span className='text-gradient-to-r from-indigo-500 to-purple-500 text-xs'>Jane may be interested in upgrading espresso machines for her in-store coffee shops.</span>
              </div>
              <div className="flex items-center gap-2 mt-0 xl:mt-3">
                <button className="p-1.5 bg-white hover:bg-gray-100 rounded flex border items-center">
                  <FaPen size={14} className="text-gray-600 pr-1" />
                  <span className='text-sm'>Edit</span>
                </button>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1.5 rounded-md text-xs flex items-center">
                    <span className='text-white'><LuSendHorizontal /></span>
                  Approve and send
                </button>
              </div>
            </div>

            <div className=" bg-white shadow-sm p-2 flex gap-4">
              <p className="cursor-pointer px-4 py-2 text-gray-600 text-sm">
                Engage
              </p>
              <div className="flex items-center">
                <p className="cursor-pointer text-gray-600 text-sm ml-1 underline underline-blue-300 ">Research</p>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="mb-6 bg-white rounded-xl p-4">
          <div className='bg-blue-100 p-2 rounded-xl'>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Why I picked this lead</h3>
              <LuSparkles className="text-blue-600 w-5 h-5" />
            </div>
            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
              <li>Jane is a key decision maker and was browsing &apos;espresso machines&apos; on First Coffee&apos;s website.</li>
              <li>Multiple people at her company have reported &apos;slowness&apos; during service requests</li>
              <li>Northwind Traders currently use $200M in revenue from their in-store coffee shops</li>
            </ul>
          

          {/* Stats Section */}
          <div className="flex flex-wrap gap-4 p-4 mb-6">
            
            <div className="bg-white rounded-xl p-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Decision maker</div>
                <div className="text-sm font-medium text-gradient-to-r from-indigo-500 to-purple-500">Yes</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600">$</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Potential deal value</div>
                <div className="text-sm font-medium text-gradient-to-r from-indigo-500 to-purple-500">$1M</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">↗</span>
              </div>
              <div>
                <div className="text-xs text-gray-600">Intent</div>
                <div className="text-sm font-medium text-gradient-to-r from-indigo-500 to-purple-500">High</div>
              </div>
            </div>
          </div>
          </div>

          <div className=' flex flex-col items-center justify-between xl:flex-row'>
            <div className='flex items-center gap-2'>
                <div className=' border rounded-lg bg-gray-50 p-1'>
                <TbShieldPin/>
                </div>
              
                <div className='flex items-center border rounded-md bg-gray-50 p-1'>
                <p className='text-xs p-1 border-r pr-1'>1</p>
                    <BsFillRecordCircleFill className='pl-1 text-blue-600' />
                    <p className='text-xs pl-1 '>D365 Sales</p>
                </div>
            </div>
            <div className='flex items-center justify-between my-4'>
                <p className='border bg-gray-50 rounded-lg text-xs p-1 mr-2'>AI-generated content may be incorrect</p>
                <div className='flex items-center gap-2'>
                    <BsHandThumbsUp />
                    <BsHandThumbsDown />
                </div>
            </div>
          </div>
          </div>

          {/* About Section */}
          <div className="mb-6 bg-slate-50 shadow rounded-xl p-3">
            <h3 className="font-medium mb-2">About Jane</h3>
            <p className="text-sm text-gray-600">
              Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders&apos; in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane&apos;s commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops&apos; offerings, ensuring consistent, high-quality service.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing 1 of 9</span>
              <button className="text-blue-600 text-sm">Show all</button>
            </div>
            <div className='flex items-center gap-2'>
                    <BsHandThumbsUp />
                    <BsHandThumbsDown />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngageModal;
