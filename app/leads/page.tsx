import Image from "next/image";
import Ellipse from "../assets/Ellipse.png";
import Ellipse1 from "../assets/Ellipse1.png";
import { IoMailUnreadOutline } from "react-icons/io5";
import { VscSparkleFilled } from "react-icons/vsc";
import EngagementCard from "../components/EngagementCard";

export default function Home() {
  return (
    <div className=" text-black">
      <div className="my-6 flex items-center justify-between">
        <h2 className="text-md font-bold">
          Hi Mona, <span className="text-blue-700">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads
        </h2>
        <div>range here</div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <div className="col-span-2">
          <h2 className="text-sm font-medium">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads needs need your focus.
          </h2>

          <div className="flex flex-col mt-8 gap-3 xl:flex-row">

            <EngagementCard />

            <div className="border border-gray-200 rounded-3xl p-6 max-w-md bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={Ellipse1}
                    alt="Profile"
                    className="rounded-full"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
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
                  <h2 className="text-base font-semibold text-gray-900">
                    Allan Munger
                  </h2>
                  <p className="text-sm text-gray-600">
                    Head of Real Estate Development • Contonso Coffee
                  </p>
                </div>
              </div>

              <div className="relative mt-4">
                <div className="bg-indigo-50 p-4 rounded-2xl">
                  <div className="absolute -top-0.5 -right-0.5 w-6 h-6 bg-white" />
                  <div className="absolute top-0 right-0 rounded-full">
                    <VscSparkleFilled className="text-indigo-600 w-5 h-5 rounded-2xl translate-x-2 -translate-y-2" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="">
                      <IoMailUnreadOutline size={20} />
                    </div>
                    <h2 className="font-semibold text-gray-900">
                      Prepare for meeting with Allan
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Prepare for high-buying intent meeting Copilot scheduled for
                    2pm regarding upgrading ervice contract.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <span>Upcoming meeting</span>
                <span className="font-bold text-gray-400">•</span>
                <span>Due today</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="flex items-center justify-center">
            <div className="w-[11px] h-full bg-red-300"></div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="text-sm font-medium">Other key activities</h2>

          <div className="flex flex-col gap-3 mt-12">
            <div className="border border-gray-200 rounded-3xl p-6 max-w-md bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <Image src={Ellipse} alt="dp" height={35} width={35} />
                <div className="flex flex-col pl-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    Cafe A100 for Woodland Bank
                  </h2>
                  <p className="text-sm text-gray-600 ">
                    Woodland Bank • $280,000 • 8 days to close
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 my-1 rounded-md p-1">
                <IoMailUnreadOutline />
                <h2 className="text-sm pl-1 font-semibold text-gray-900">
                  Review draft and reply to Chrish Naido
                </h2>
              </div>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6 max-w-md bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <Image src={Ellipse} alt="dp" height={35} width={35} />
                <div className="flex flex-col pl-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    Cafe A100 for Woodland Bank
                  </h2>
                  <p className="text-sm text-gray-600 ">
                    Woodland Bank • $280,000 • 8 days to close
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 my-1 rounded-md p-1">
                <IoMailUnreadOutline />
                <h2 className="text-sm pl-1 font-semibold text-gray-900">
                  Review draft and reply to Chrish Naido
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
