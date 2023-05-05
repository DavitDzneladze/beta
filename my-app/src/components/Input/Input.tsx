import { Controller } from "react-hook-form";
import { Input as InputAntd } from "antd";

interface IInputProps {
  name: string;
  error: boolean;
  errorContent?: string;
}

export const Input = ({ name, error, errorContent }: IInputProps) => (
  <Controller
    name={name}
    render={({ field }) => {
      const { value, onChange } = field;

      return (
        <>
          <span style={{ margin: "10px" }}> {name}</span>
          <InputAntd
            value={value}
            onChange={onChange}
            id={name}
            style={{ margin: "10px" }}
          />
          {error && errorContent}
        </>
      );
    }}
  />
);
