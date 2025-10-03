import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";

export const useStudents = () => {
  const queryClient = useQueryClient();

  // GET all students
  const getStudents = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get("/user");
      return data;
    },
  });

  // CREATE student
  const createStudent = useMutation({
    mutationFn: async (newStudent: any) => {
      const { data } = await api.post("/user", newStudent);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // UPDATE student
  const updateStudent = useMutation({
    mutationFn: async (student: any) => {
      const { data } = await api.put(`/user/${student.id}`, student);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // DELETE student
  const deleteStudent = useMutation({
    mutationFn: async (id: number | string) => {
      await api.delete(`/user/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { getStudents, createStudent, updateStudent, deleteStudent };
};
