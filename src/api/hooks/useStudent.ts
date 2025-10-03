import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";

export const useStudents = () => {
  const queryClient = useQueryClient();

  const getStudents = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get("/user");
      return data;
    },
  });

  const createStudent = useMutation<any, any, any>({
    // queryKey: ["users"],
    mutationFn: async (newPhone) => {
      const { data } = await api.post("/user", newPhone);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const updateStudent = useMutation<any, any, any>({
    // queryKey: ["users", id],
    mutationFn: async (phone) => {
      const { data } = await api.put(`/user/${phone.id}`, phone);
      return data;
    },
  });

  const deleteStudent = useMutation<any, any, any>({
    mutationFn: async (id) => {
      await api.delete(`/user/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return { getStudents, createStudent, updateStudent, deleteStudent };
};
