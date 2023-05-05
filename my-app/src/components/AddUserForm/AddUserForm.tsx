import { FormProvider } from "react-hook-form";

import { Input } from "../Input/Input";
import { useAddUserForm } from "./useAddUserForm";
import { Button } from "antd";

interface IAddUserFormProps {
  closeModal: (id: number) => void;
  id: number;
}

export const AddUserForm = ({ closeModal, id }: IAddUserFormProps) => {
  const { methods, handleSubmit, onSubmit, isDisabled, errors } =
    useAddUserForm({
      closeModal,
      id,
    });

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
