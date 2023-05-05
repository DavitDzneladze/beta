import { FormProvider } from "react-hook-form";

import { Input } from "../Input/Input";
import { useEditUserForm } from "./useEditUserForm";
import { IAdduserProps } from "../../store/types";
import { Button } from "antd";

interface IEditUserForm extends IAdduserProps {
  id: number;
  closeModal: (id: number) => void;
}

export const EditUserForm = (props: IEditUserForm) => {
  const { methods, handleSubmit, onSubmit, isDisabled, errors } =
    useEditUserForm(props);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={"name"}
          error={isDisabled}
          errorContent={errors.name?.message}
        />
        <Input
          name={"email"}
          error={isDisabled}
          errorContent={errors.email?.message}
        />
        <Input
          name={"phone"}
          error={isDisabled}
          errorContent={errors.phone?.message}
        />
        <Input
          name={"street"}
          error={isDisabled}
          errorContent={errors.street?.message}
        />
        <Input
          name={"city"}
          error={isDisabled}
          errorContent={errors.city?.message}
        />
        <Button htmlType="submit" disabled={isDisabled}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
