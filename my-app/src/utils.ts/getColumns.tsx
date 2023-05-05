import { Modal, Button } from "antd";

import { IGetColumsProps, IUser, IColumns } from "../store/types";
import { AddUserForm } from "../components/AddUserForm/AddUserForm";
import { EditUserForm } from "../components/EditUserForm/EditUserForm";

export const getColumns = ({
  isOpen,
  deleteUserHandler,
  openModal,
  closeModal,
  isRowOpen,
  handleRowClose,
  handleRowOpen,
}: IGetColumsProps): IColumns[] => {
  const rows = ["id", "name", "email", "street", "city", "phone"];

  const arr = rows.map((item) => ({
    title: item,
    dataIndex: item,
    key: item,
    render: (text: string, record: IUser) => {
      return (
        <>
          <div
            onClick={() => {
              handleRowOpen(record.id);
            }}
          >
            {text}
          </div>
          <Modal
            title="Update user"
            open={isRowOpen.isOpen && isRowOpen.id === record.id}
            onCancel={() => {
              handleRowClose(-1);
            }}
            footer={false}
          >
            <EditUserForm {...{ closeModal: handleRowClose, ...record }} />
          </Modal>
        </>
      );
    },
  }));

  const action = {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text: string, record: IUser) => {
      return (
        <div style={{ display: "flex", gap: "20px" }}>
          <Button
            onClick={() => {
              deleteUserHandler(record.id);
            }}
          >
            Delete user
          </Button>
          <Button
            onClick={() => {
              openModal(record.id);
            }}
          >
            Add user
          </Button>
          <Modal
            title="Add user"
            open={isOpen.isOpen && isOpen.id === record.id}
            onCancel={() => {
              closeModal(-1);
            }}
            footer={false}
          >
            <AddUserForm closeModal={closeModal} id={record.id} />
          </Modal>
        </div>
      );
    },
  };

  arr.push(action);

  return arr;
};
