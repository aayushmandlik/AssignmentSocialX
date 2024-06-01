import Image from "next/image";
import northface from "../public/northface.png";
import dropdown from "../public/dropdown.png";
import leftarrow from "../public/leftarrow.png";
import schedule from "../public/schedule.png";
import channel from "../public/channel.png";
import inbox from "../public/inbox.png";
import analytics from "../public/analytics.png";

const Sidebar = () => {
  return (
    <div className="min-h-screen p-5 bg-white justify-between w-64">
      SocialX
      <div className="mt-5 text-[12px] font-bold p-3 border rounded flex">
        <Image className="w-[25px] h-[25px] rounded-full" src={northface} />
        <p className="py-1 ml-3">The North Face</p>
        <Image className="w-[10px] h-[10px] ml-12 mt-2" src={dropdown} />
      </div>
      <div className="flex p-5 border-b-2 hover:cursor-pointer">
        <Image className="w-[15px] h-[10px] mt-2" src={leftarrow} />
        <span className="t text-[15px] ml-3">Return to Mainmenu</span>
      </div>
      <div className=" text-gray-400 text-[13px] mt-2 mb-4">Social Media</div>
      <div className="flex border p-2 -mx-2 bg-schedule rounded-[10px] hover:cursor-pointer">
        <Image className="w-[15px] h-[15px] mt-1 text-white" src={schedule} />
        <span className="text-white mx-2 text-[15px]">Schedule</span>
      </div>
      <div className="flex p-2 -mx-2 hover:cursor-pointer">
        <Image className="w-[15px] h-[15px] mt-1 text-white" src={channel} />
        <span className="mx-2 text-[15px]">Channels</span>
      </div>
      <div className="flex p-2 -mx-2 hover:cursor-pointer">
        <Image className="w-[15px] h-[15px] mt-1 text-white" src={inbox} />
        <span className="mx-2 text-[15px]">Inbox</span>
      </div>
      <div className="flex p-2 -mx-2 hover:cursor-pointer">
        <Image className="w-[15px] h-[15px] mt-1 text-white" src={analytics} />
        <span className="mx-2 text-[15px]">Analytics</span>
      </div>
    </div>
  );
};

export default Sidebar;
