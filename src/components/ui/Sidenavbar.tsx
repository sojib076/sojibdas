import { useState } from "react";

import { BookUser, ChevronRight, Inbox,  LucideIcon } from "lucide-react";
import { Button } from "./button";
import { Nav } from "./nav";



const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);



 

  const navLinks: {
    title: string;
    to: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[] = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: Inbox,
      variant: "default",
    },
    {
      title: "Create Blogs",
      to: "/dashboard/createblogs",
      icon: BookUser as LucideIcon,
      variant: "default",
     
    },
    {
      title: "Add Skills",
      to: "/dashboard/addskills",
      icon: BookUser as LucideIcon,
      variant: "default",
    },
    {
      title: "Add Project",
      to: "/dashboard/addproject",
      icon: BookUser as LucideIcon,
      variant: "default",
    },
   
    
  ];

  
  return (
    <div className="relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 bg-white">
      <div className="my-10">
        <Button
          variant="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={navLinks}
      />
    </div>
  );
};

export default Sidenavbar;