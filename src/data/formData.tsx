export const initialValues = {
  username: "",
  password: "",
  auth: "",
};

export type loginFormValidations = {
  username: string;
  password: string;
  auth: string;
};

export const initialContactValues = {
  name: "",
  lastName: "",
  contact: "",
  mobilePhone: "",
  date: "",
  phone: "",
  email: "",
  pager: "",
  favorite: false,
};

export type contactFormValidations = {
  name: string;
  lastName: string;
  contact: string;
  date: string;
  mobilePhone: any;
  phone: any;
  email: string;
  pager: any;
  favorite: boolean;
};
