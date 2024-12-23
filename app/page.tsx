import Image from "next/image";
import Ellipse from './assets/Ellipse.png'
import { IoMailUnreadOutline } from "react-icons/io5";

export default function Home() {
  return (
  <div className=" text-black">
    <div>
            <h2>Hi Mona, <span className='text-blue-700'>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads</h2>
            <div>
                range here
            </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-2">
          <h2>Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads needs need your focus.</h2>

          <div className="border rounded-2xl p-6">
          <div className="flex ">
          <Image src={Ellipse} alt="dp" />
            <div className="flex flex-col ">
              <h2>Jane Reyes</h2>
              <p>COO . Northwind Traders</p>
            </div>
            </div>
              <div className="bg-blue-50 rounded-b-xl rounded-tl-xl">
                <div className="flex">
                <IoMailUnreadOutline />
                <h2 className="font-bold">Engage with Jane Reyes</h2>
                </div>
                <p>Jane may be interested in upgrading espresso machines fo her instore coffee shops</p>
              </div>
              <p>
                <p>Expand business High buying intent</p>
              </p>
          </div>
          </div>
          <div className="col-span-1">

          </div>
        </div>
  </div>
  );
}
