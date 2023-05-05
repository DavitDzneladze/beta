import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEditUser } from "../../store/hooks/hooks";
import { IAdduserProps } from "../../store/types";

interface IEditUserForm extends IAdduserProps {
  id: number;
  closeModal: (id: number) => void;
}

export const useEditUserForm = ({
  email,
  name,
  phone,
  street,
  city,
  id,
  closeModal,
}: IEditUserForm) => {
  const editUserHandler = useEditUser();

  const validationSchema = yup.object().shape({
    name: yup.string().min(6),
    email: yup.string().email(),
    phone: yup.string().min(12),
    city: yup.string().min(6),
    street: yup.string().min(6),
  });

  const methods = useForm<IEditUserForm>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name,
      email,
      phone,
      city,
      street,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = methods;

  const isDisabled = !isDirty || !isValid;

  const onSubmit = (userProps: IEditUserForm) => {
    editUserHandler({
      id,
      userValues: userProps,
    });

    closeModal(id);
  };

  return {
    errors,
    methods,
    isDisabled,
    onSubmit,
    handleSubmit,
    register,
  };
};
