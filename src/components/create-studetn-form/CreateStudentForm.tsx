import { memo, useState, type ChangeEvent, type FormEvent } from "react";
import Title from "../ui/Title";
import { REGIONS } from "../../static/index";
import { useStudents } from "../../api/hooks/useStudent";

const CreateStudentForm = () => {
  const { createStudent } = useStudents();
  const [data, setData] = useState({
    f_name: "",
    l_name: "",
    gender: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   createStudent(data);
  // };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
    createStudent.mutate(data);
  };

  return (
    <div className="max-w-[600px] w-full">
      <Title className="mb-3">Create</Title>
      <form onSubmit={handleSubmit}>
        <input
          name="f_name"
          value={data.f_name}
          onChange={handleChange}
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="first name"
        />
        <input
          name="l_name"
          value={data.l_name}
          onChange={handleChange}
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="last name"
        />
        <select
          name="gender"
          value={data.gender}
          onChange={handleChange}
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
        >
          <option value="" hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          name="address"
          value={data.address}
          onChange={handleChange}
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
        >
          <option value="" hidden>
            Select Region
          </option>
          {REGIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(CreateStudentForm);
