import { useStudents } from "../../api/hooks/useStudent";
import StudentView from "../../components/student-view/StudentView";

const Males = () => {
  const { getStudents } = useStudents();
  const { data } = getStudents;
  const males = data?.filter((item: any) => item.gender === "male");
  return (
    <div>
      {" "}
      <StudentView data={males} />
    </div>
  );
};

export default Males;
