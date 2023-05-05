import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Menu
      style={{ display: "flex", width: "200px" }}
      items={[
        { label: "Home", key: "Home", onClick: () => navigate("/") },
        { label: "Chart", key: "Chart", onClick: () => navigate("/chart") },
      ]}
    ></Menu>
  );
};
