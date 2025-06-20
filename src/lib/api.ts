import { User } from "@/types";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("/api/users");
  return res.json();
};
