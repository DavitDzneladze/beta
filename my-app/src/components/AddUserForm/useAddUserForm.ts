import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddUser } from "../../store/hooks/hooks";
import { IAdduserProps } from "../../store/types";

interface IAddUserForm extends IAdduserProps {}

interface IUseAddUserFormProps {
  id: number;
  closeModal: (id: number) => void;
}

export const useAddUserForm = ({ closeModal, id }: IUseAddUserFormProps) => {
  const addUserHandler = useAddUser();

  const validationSchema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().email().required(),
    phone: yup.string().required().min(12),
    city: yup.string().required().min(6),
    street: yup.string().required().min(6),
  });

  const methods = useForm<IAddUserForm>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      street: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = methods;

  const isDisabled = !isDirty || !isValid;

  const onSubmit = (userProps: IAddUserForm) => {
    addUserHandler(userProps);
    closeModal(id);
  };

  return {
    methods,
    isDisabled,
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
};
