interface IAddress {
  city: string;
  street: string;
}

export interface IAdduserProps {
  name: string;
  email: string;
  street: string;
  city: string;
  phone: string;
}

export interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: any;
}

export interface IUsersResponse {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
}

export interface IModal {
  isOpen: boolean;
  id: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  street: string;
  city: string;
  phone: string;
}

export interface IChanges {
  id: number;
  userValues: IAdduserProps;
}

export interface IStore {
  cities: any[];
  getCities: () => void;
  users: IUser[];
  addUser: (userProps: IAdduserProps) => void;
  getAllUsers: () => void;
  deleteUser: (userId: number) => void;
  editUser: (changes: IChanges) => void;
}

export interface IGetColumsProps {
  isOpen: IModal;
  deleteUserHandler: (userId: number) => void;
  openModal: (id: number) => void;
  closeModal: (id: number) => void;
  isRowOpen: IModal;
  handleRowOpen: (id: number) => void;
  handleRowClose: (id: number) => void;
}
