import { useStudents } from '../../api/hooks/useStudent';
import StudentView from '../../components/student-view/StudentView';

const Female = () => {
    const { getStudents } = useStudents();
      const { data } = getStudents;
      const females = data?.filter((item: any) => item.gender === "female");
  return (
    <div>
      <StudentView data={females} />
    </div>
  );
}

export default Female