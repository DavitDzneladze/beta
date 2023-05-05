import { create } from "zustand";

import { IChanges, IStore } from "./types";
import { userService } from "../services/userService";

export const useUserStore = create<IStore>((set) => ({
  users: [],
  cities: [],
  getCities: () => {
    set((state) => {
      const rawCities: string[] = [];

      for (let i = 0; i < state.users.length; i++) {
        rawCities.push(state.users[i]?.city);
      }

      const cities = rawCities.filter((item) => item);
      const uniqueCities = Array.from(new Set(cities));
      const result: (string | number)[][] = [["cities", "statistic"]];

      for (let i = 0; i < uniqueCities.length; i++) {
        const arr = cities.filter((item) => item === uniqueCities[i]);

        result.push([uniqueCities[i], arr?.length]);
      }

      return {
        ...state,
        cities: result,
      };
    });
  },
  addUser: async (newUser) => {
    try {
      const { data } = await userService.addUser(newUser);
      const users = data.map(({ id, name, email, phone, address }) => ({
        id,
        name,
        email,
        phone,
        city: address?.city,
        street: address?.street,
      }));
      set((state) => ({
        ...state,
        users,
      }));
    } catch (err) {
      console.log(err);
    }
  },
  editUser: async (changes: IChanges) => {
    try {
      const { data } = await userService.editUser(changes);
      const users = data.map(({ id, name, email, phone, address }) => ({
        id,
        name,
        email,
        phone,
        city: address?.city,
        street: address?.street,
      }));
      set((state) => ({
        ...state,
        users,
      }));
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async (userId: number) => {
    try {
      const { data } = await userService.deleteUser(userId);
      const users = data.map(({ id, name, email, phone, address }) => ({
        id,
        name,
        email,
        phone,
        city: address?.city,
        street: address?.street,
      }));
      set((state) => ({
        ...state,
        users,
      }));
    } catch (err) {
      console.log(err);
    }
  },
  getAllUsers: async () => {
    try {
      const { data } = await userService.getAllUsers();
      const users = data.map(({ id, name, email, phone, address }) => ({
        id,
        name,
        email,
        phone,
        city: address?.city,
        street: address?.street,
      }));
      set((state) => ({
        ...state,
        users: users,
      }));
    } catch (err) {
      console.log(err);
    }
  },
}));
