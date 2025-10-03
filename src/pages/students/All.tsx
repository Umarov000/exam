import StudentView from '../../components/student-view/StudentView'
import { useStudents } from '../../api/hooks/useStudent';

const All = () => {
     const { getStudents } = useStudents();
      const { data } = getStudents;
  return (
    <div>
      <StudentView data={data} />
    </div>
  );
}

export default All