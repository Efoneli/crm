import Image from "next/image";
import Ellipse from "./assets/Ellipse.png";
import Ellipse1 from "./assets/Ellipse1.png";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className=" text-black">
      <div className="my-2 flex items-center justify-between">
        <h2 className="text-md font-bold">
          Hi Mona, <span className="text-blue-700">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads
        </h2>
        <div>range here</div>
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-sm font-medium">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads needs need your focus.
          </h2>

          <div className="flex flex-col gap-3 xl:flex-row">
            <div className="border rounded-2xl p-2 xl:p-4 xl:my-4">
              <div className="flex ">
                <Image src={Ellipse} alt="dp" height={35} width={35} />
                <div className="flex flex-col pl-2">
                  <h2 className="text-sm font-bold">Jane Reyes</h2>
                  <p className="text-xs ">COO . Northwind Traders</p>
                </div>
              </div>
              <div className="bg-blue-50 p-2 my-3 rounded-b-xl rounded-tl-xl">
                <div className="flex items-center">
                  <IoMailUnreadOutline />
                  <h2 className="font-bold pl-1">Engage with Jane Reyes</h2>
                </div>
                <p>
                  Jane may be interested in upgrading espresso machines fo her
                  instore coffee shops
                </p>
              </div>
              <p>Expand business High buying intent</p>
            </div>

            <div className="border rounded-2xl p-2 xl:p-4 xl:my-4">
              <div className="flex ">
                <Image src={Ellipse1} alt="dp" height={35} width={35} />
                <div className="flex flex-col pl-2">
                  <h2 className="text-sm font-bold">Allan Munger</h2>
                  <p className="text-xs ">Head of Real Estate Developement . Contoso Coffee</p>
                </div>
              </div>
              <div className="bg-blue-50 p-2 my-3 rounded-b-xl rounded-tl-xl">
                <div className="flex items-center">
                  <IoMailUnreadOutline />
                  <h2 className="font-bold pl-1">Engage with Jane Reyes</h2>
                </div>
                <p>
                  Jane may be interested in upgrading espresso machines fo her
                  instore coffee shops
                </p>
              </div>
              <p>Expand business High buying intent</p>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
