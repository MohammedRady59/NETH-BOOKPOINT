import * as yup from "yup";
export const signupSchema = yup.object({
  fullname: yup
    .string()
    .required("Fullname is required")
    .min(4, "Fullname should be at least 4 character"),
  email: yup.string().required("Email is required").email("Enter vaild email"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password should be at least 3 character or number"),
  phoneNum: yup
    .string()
    .required("Phone is required")
    .min(11, " Enter vaild phone number"),
  gender: yup.string().required("Gender is required"),
});

export const signinSchema = yup.object({
  email: yup.string().required("Email is required").email("Enter vaild email"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password should be at least 3 character or number"),
});
