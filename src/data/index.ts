import { IFormSignup,ISignInForm } from "@/Interface";

export const FormSignup: IFormSignup[] = [
  {
    id: "fullname",
    label: "Fullname",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "phoneNum",
    label: "PhoneNum",
    type: "number",
  },
];

export const SignInFormData :ISignInForm[] =[
  {
    id:"email",
    label:"Email",
    type:"email"
  },{
    id:"password",
    label:"Password",
    type:"password"
  }
]