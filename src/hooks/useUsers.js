import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { queryKeys } from "../query/queryKeys";

export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: userService.getAll,
  });
};