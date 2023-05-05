import axios from "axios";

import { USER_PATH } from "../constants";
import { IAdduserProps, IChanges, IUsersResponse } from "../store/types";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const getAllUsers = () => instance.get<IUsersResponse[]>(USER_PATH);

const deleteUser = (userId: number) =>
  instance.delete<IUsersResponse[]>(USER_PATH, {
    data: { userId },
  });

const addUser = (newUser: IAdduserProps) =>
  instance.post<IUsersResponse[]>(USER_PATH, newUser);

const editUser = (changes: IChanges) =>
  instance.patch<IUsersResponse[]>(USER_PATH, changes);

export const userService = {
  getAllUsers,
  deleteUser,
  addUser,
  editUser,
};
