import { memo, useEffect, useState } from "react";
import Box from "../ui/Box";
import { Bookmark, SquarePen, Trash } from "lucide-react";
import { useStudents } from "../../api/hooks/useStudent";
import { useDispatch, } from "react-redux";
import { toggleLike } from "../../lib/features/savedSlice";

const StudentView = ({ data }: { data: any }) => {
   const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  useEffect(() => {}, [bool]);
  const { deleteStudent } = useStudents();
  const handleDelete = (id: string) => {
    deleteStudent.mutate(id);
    setBool((prev) => !prev);
  };
  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {data?.map((item: any) => (
          <div className="border border-slate-200 p-4 rounded-xl text-center">
            <div className="relative">
              <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
                <span className="text-4xl font-bold text-slate-400">
                  {item.f_name[0].toUpperCase()}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex flex-col gap-3">
                <button
                  onClick={() => dispatch(toggleLike(item))}
                  className="cursor-pointer"
                >
                  <Bookmark className="size-5 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer"
                >
                  <Trash className="size-5 text-red-500" />
                </button>
                <button className="cursor-pointer">
                  <SquarePen className="size-5 text-green-600" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">
                {item.f_name} {item.l_name}
              </h3>
              <p>{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default memo(StudentView);
