import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { NavLink, Outlet, } from "react-router-dom";

const Student = () => {
  
  return (
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Student</Title>
        </div>
      </Box>
      <Box>
        <div className="flex gap-6">
          <NavLink to={"all"} className="border-b-2 border-blue-500">
            All
          </NavLink>
          <NavLink to={"males"} className="border-b-2 border-transparent">
            Male
          </NavLink>
          <NavLink to={"females"} className="border-b-2 border-transparent">
            Female
          </NavLink>
        </div>
      </Box>
      <Outlet/>
    </div>
  );
};

export default memo(Student);
