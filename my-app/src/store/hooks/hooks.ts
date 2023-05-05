import { useUserStore } from "../index";

export const useGetAllUsers = () => useUserStore((state) => state.getAllUsers);
export const useDeleteUser = () => useUserStore((state) => state.deleteUser);
export const useAddUser = () => useUserStore((state) => state.addUser);
export const useEditUser = () => useUserStore((state) => state.editUser);
export const useGetCities = () => useUserStore((state) => state.getCities);
