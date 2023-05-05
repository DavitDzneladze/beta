import { useEffect } from "react";
import { Chart as Pie } from "react-google-charts";

import { NavBar } from "../NavBar/NavBar";
import { useGetCities } from "../../store/hooks/hooks";
import { useUserStore } from "../../store";

export const Chart = () => {
  const getCities = useGetCities();
  const cities = useUserStore((state) => state.cities);
  const users = useUserStore((state) => state.users);

  useEffect(() => {
    getCities();
  }, [users.length]);

  return cities ? (
    <>
      <NavBar />
      <Pie chartType="PieChart" data={cities} width={"100%"} height={"400px"} />
    </>
  ) : null;
};
