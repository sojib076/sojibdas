import Sidenavbar from "@/components/ui/Sidenavbar";
import { Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <div>
   
      <div className="flex lg:flex-row flex-col ">
        <div className="">
          <Sidenavbar></Sidenavbar>
        </div>
        <div className=" lg:w-[90%] lg:pl-20 lg:mt-20 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;