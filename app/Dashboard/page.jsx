import Image from "next/image";
import insta from "./insta.png";
import facebook from "./facebk.png";
import linkedin from "./linkedin.png";
import newpost from "./newpost.png";
import aicreate from "./aicreate.png";
import draft from "./drafts.png";
import suggested from "./suggested.png";
import custom from "./custom.png";
import greentick from "./greentick.png";
import pen from "./pen.png";
import menu from "./menu.png";
import kodi from "./kodi.png";
import dropdown from "./dropdown.png";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-white w-[1080px] p-4 border border-s-2 flex items-center">
          <div>Schedule</div>

          <div className="ml-auto flex space-x-2">
            <Image className="w-[24px] h-[24px] mr-4" src={menu} />
            <Image className="w-[25px] h-[25px]" src={kodi} />
            <span className="text-[15px]">Kodi Willson</span>
            <Image className="w-[15px] h-[15px] mt-1" src={dropdown} />
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="h-[999px] p-5 bg-slate-100 justify-between w-72 border border-s-2">
          <div className="font-bold">Channels</div>
          <div className="text-[10px] ml-1 -mt-2 mb-3">3 Connected</div>
          <div className="relative p-0 border border-purple-500 rounded-[10px] bg-white">
            <Image className="w-[200px] h-[50px] mt-2" src={insta} />
            <div className="text-[13px] text-purple-700 font-bold absolute top-4 ml-12 ">
              NorthFace
            </div>
            <div className="text-[10px] absolute top-7 ml-12 ">Instagram</div>
          </div>
          <div className="relative p-0 border border-white rounded-[10px] bg-white mt-2">
            <Image className=" mt-2" src={facebook} />
            <div className="text-[13px] font-bold absolute top-4 ml-12 ">
              NorthFace
            </div>
            <div className="text-[10px] absolute top-7 ml-12 ">Instagram</div>
          </div>
          <div className="relative p-0 border border-white rounded-[10px] bg-white mt-2">
            <Image className=" mt-2" src={linkedin} />
            <div className="text-[13px] font-bold absolute top-4 ml-12 ">
              NorthFace
            </div>
            <div className="text-[10px] absolute top-7 ml-12 ">Instagram</div>
          </div>
          <div className="relative p-0 border border-white rounded-[10px] bg-white mt-2">
            <Image className=" mt-2" src={linkedin} />
            <div className="text-[13px] font-bold absolute top-4 ml-12 ">
              NorthFace
            </div>
            <div className="text-[10px] absolute top-7 ml-12 ">Instagram</div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mt-4 ml-4">Schedule</h2>
            <div>
              <button className="bg-blue-600 text-[12px] w-[70px] h-[30px] text-white p-1 mt-4 rounded-md">
                Day
              </button>
              <button className="bg-white p-1 text-[12px] w-[70px] border border-gray-400 rounded-md mr-5">
                Month
              </button>
            </div>
          </div>
          <div className="mt-3 w-full h-full custom-bg">
            <div className="p-6">
              <div className="text-[15px] font-bold">Hey Kodi Wilson 👋</div>
              <div className="text-[10px] -mt-1">
                Lets post something extraordinary today
              </div>
            </div>

            <div className="flex -mt-7">
              <div>
                <Image src={newpost} />
              </div>
              <div>
                <Image src={aicreate} />
              </div>
              <div>
                <Image src={draft} />
              </div>
            </div>

            <div className=" mt-4 p-4 pb-10">
              <span className="text-[16px] font-bold ml-3">Today </span>
              <span className="text-[10px] ml-3">May 18</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 w-full overflow-y-auto">
              <div className="border bg-white rounded-[10px] mx-8 flex">
                <Image className="p-1 mt-1 mx-1" src={custom} />
                <div className="mt-1 -mx-1">
                  <span className="text-[12px] font-bold">Custom time</span>
                  <div className="text-[10px] -mt-1 mx-0">Post it</div>
                </div>
              </div>

              <div className="flex mx-8 mt-5 border-b-2 pb-5">
                <div className="w-52 border bg-white p-3 rounded-[10px] flex">
                  <Image src={suggested} className="" />
                  <div className="ml-2">
                    <div className="text-[10px]">Suggested Time</div>
                    <div className="text-[12px] font-bold">3:35 pm</div>
                  </div>
                </div>
                <div className="w-52 border bg-white p-3 rounded-[10px] flex ml-3">
                  <Image src={suggested} className="" />
                  <div className="ml-2">
                    <div className="text-[10px]">Suggested Time</div>
                    <div className="text-[12px] font-bold">3:35 pm</div>
                  </div>
                </div>
                <div className="w-52 border bg-white p-3 rounded-[10px] flex ml-3">
                  <Image src={suggested} className="" />
                  <div className="ml-2">
                    <div className="text-[10px]">Suggested Time</div>
                    <div className="text-[12px] font-bold">3:35 pm</div>
                  </div>
                </div>
              </div>

              <div className=" mt-3 p-4">
                <span className="text-[16px] font-bold ml-3">Tommorow </span>
                <span className="text-[10px] ml-3">May 19</span>
              </div>

              <div className="flex mx-8 border-b-2 pb-5">
                <div className="half-gradient w-96 border bg-white pt-2 rounded-[10px] flex">
                  <Image src={greentick} className="mx-2 w-[50px] h-[50px]" />
                  <div className="mt-1 -mx-2">
                    <div className="text-[10px]">1 post scheduled at</div>
                    <div className="text-[12px] font-bold">3:35 pm</div>
                  </div>
                  <Image className="w-[35px] h-[35px] ml-48 mt-1" src={pen} />
                </div>
                <div className="w-52 border bg-white rounded-[10px] flex ml-3">
                  <Image className="p-1 mt-1 mx-1" src={custom} />
                  <div className="mt-1 -mx-1">
                    <span className="text-[12px] font-bold">Custom time</span>
                    <div className="text-[10px] -mt-1 mx-0">Post it</div>
                  </div>
                </div>
              </div>

              <div className=" mt-3 p-4">
                <span className="text-[16px] font-bold ml-3">Monday </span>
                <span className="text-[10px] ml-3">May 20</span>
              </div>

              <div className="flex mx-8 mt-5 border-b-2 pb-5">
                <div className="w-52 border bg-white p-3 rounded-[10px] flex">
                  <Image src={suggested} className="" />
                  <div className="ml-2">
                    <div className="text-[10px]">Suggested Time</div>
                    <div className="text-[12px] font-bold">3:35 pm</div>
                  </div>
                </div>
                <div className="w-52 border bg-white rounded-[10px] flex ml-3">
                  <Image className="p-1 mt-1 mx-1" src={custom} />
                  <div className="mt-1 -mx-1">
                    <span className="text-[12px] font-bold">Custom time</span>
                    <div className="text-[10px] -mt-1 mx-0">Post it</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
