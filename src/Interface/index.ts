export interface IFormSignup {
  id: "fullname" | "email" | "password" | "phoneNum";
  label: string;
  type: string;
}

export interface ISignup {
  fullname: string;
  email: string;
  phoneNum: string;
  password: string;
  gender: string;
}
