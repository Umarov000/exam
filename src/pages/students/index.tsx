import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import StudentView from "@/components/student-view/StudentView";
import { useStudents } from "../../api/hooks/useStudent";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Student = () => {
  const { pathname } = useLocation();
  const { getStudents } = useStudents();
  const { data } = getStudents;
  const navLinks = [
    {
      to: "/",
      label: "All",
      active: pathname === "/",
    },
    {
      to: "/students",
      label: "Students",
      active: pathname.startsWith("/students"),
    },
    {
      to: "/create-student",
      label: "Male",
      active: pathname.startsWith("/create-student"),
    },
    {
      to: "/bookmark",
      label: "Female",
      active: pathname.startsWith("/bookmark"),
    },
  ];
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
