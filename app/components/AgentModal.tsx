import React from "react";
import { CiUser } from "react-icons/ci";
import { GrCopy } from "react-icons/gr";
import { CgMenuLeft } from "react-icons/cg";
import { VscCopy } from "react-icons/vsc";
import { FaDiamondTurnRight } from "react-icons/fa6";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AgentSkillModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-4">
          <h2 className="text-base font-semibold text-gray-900">Agent Skill</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-lg">
            <div className="border p-4 shadow rounded-xl">
          <p className="text-sm font-medium text-gray-700 mb-3">
            Check if on-hand inventory will allow all sales orders to ship
            without delay.
          </p>

          <div className="text-sm text-gray-700 gap-1 flex flex-wrap">
            <span>When </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><CiUser/></span> any vendor</button>
            <span> sends an email with changes to </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><GrCopy/></span> confirmed purchase orders</button>
            <span>, check if the resulting </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><CgMenuLeft/></span>on-hand inventory</button>
            <span> will allow </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><VscCopy/></span>all sales orders</button>
            <span> to </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><FaDiamondTurnRight/></span>ship without delay</button>
            <span>. If so, </span>
            <button className="text-blue-300 bg-blue-50 text-xs rounded-lg px-1 gap-1 flex items-center"><span><FaDiamondTurnRight/></span>update the purchase order</button>
            <span> to reflect the change.</span>
          </div>
          </div>

          <div>
          <h2 className="text-base font-semibold text-gray-900">
              Enable email access
            </h2>
            <p className="text-xs text-gray-600 my-2">
                Allow the agent to access email inboxes to read mail fom known vendors.
            </p>
            <div className="flex items-center justify-center space-x-2 space-y-2">
              <input
                type="text"
                className="border rounded px-3 py-1 flex-1 text-sm"
                placeholder="purchasing@contoso.com"
              />
              <button className="bg-blue-600 text-white px-4 py-1 rounded">
                Allow access
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-20 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1 bg-gray-100 text-gray-400 text-sm rounded hover:bg-gray-200"
          >
            Activity
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-gray-50 border text-gray-900 text-sm rounded hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
