import { Bookmark, ChartColumn, UserRoundPlus, UsersRound } from "lucide-react";
import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navLinks = [
    {
      to: "/",
      label: "Statistic",
      active: pathname === "/",
      logo: <ChartColumn />,
    },
    {
      to: "/students",
      label: "Students",
      active: pathname.startsWith("/students"),
      logo: <UsersRound />,
    },
    {
      to: "/create-student",
      label: "Create Student",
      active: pathname.startsWith("/create-student"),
      logo: <UserRoundPlus />,
    },
    {
      to: "/bookmark",
      label: "Bookmark",
      active: pathname.startsWith("/bookmark"),
      logo: <Bookmark />,
    },
  ];
  return (
    <div className="w-[250px] h-screen overflow-auto bg-white border-r border-slate-200">
      <div className="p-4 flex items-center border-b border-slate-200 h-16 ">
        <div className="text-xl font-bold">Dashboard</div>
      </div>
      <div>
        <ul className="mt-4">
          {navLinks?.map((item: any) => (
            <li key={item.label}>
              <div className="py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100">
                <NavLink
                  to={item.to}
                  className={`${
                    item.active
                      ? "py-3 pl-2 border-l-4 border-blue-500 text-blue-500 mb-2 flex items-center gap-2 hover:bg-gray-100"
                      : "py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100 transparent"
                  }`}
                >
                  {item.logo}
                  {item.label}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(Sidebar);
