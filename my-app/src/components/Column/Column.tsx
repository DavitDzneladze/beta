import { useEffect, useState } from "react";
import { Table } from "antd";

import { useDeleteUser, useGetAllUsers } from "../../store/hooks/hooks";
import { useUserStore } from "../../store/index";
import { getColumns } from "../../utils.ts/getColumns";
import { IModal } from "../../store/types";

export const Column = () => {
  const getUsers = useGetAllUsers();
  const deleteUser = useDeleteUser();

  const [isOpen, setIsOpen] = useState<IModal>({
    id: -1,
    isOpen: false,
  });
  const [isRowOpen, setIsRowOpen] = useState<IModal>({
    id: -1,
    isOpen: false,
  });

  const usersList = useUserStore((state) => state.users);

  const handleOpenModal = (id: number) => {
    setIsOpen({
      id,
      isOpen: true,
    });
  };
  const handleCloseModal = (id: number) => {
    setIsOpen({
      id,
      isOpen: false,
    });
  };

  const handleRowOpen = (id: number) => {
    setIsRowOpen({
      id,
      isOpen: true,
    });
  };

  const handleRowClose = (id: number) => {
    setIsRowOpen({
      id,
      isOpen: false,
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Table
      dataSource={usersList}
      columns={getColumns({
        isOpen,
        isRowOpen,
        handleRowClose,
        handleRowOpen,
        deleteUserHandler: deleteUser,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
      })}
      pagination={false}
    />
  );
};
