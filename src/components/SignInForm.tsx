"use client";
import { SignInFormData } from "@/data";
import { IFormInputSignIn } from "@/Interface";
import { useSigninMutation } from "@/redux/features/Api/Authapi";
import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup"
import InputError from "./InputError";
import { signinSchema } from "@/validation/schema";
import Loader from './Loader';

interface Iprops {}
function SignInForm({}: Iprops) {
  const { push } = useRouter();

  const [SignInFunction, { isLoading, data, error }] = useSigninMutation();
  const { register, handleSubmit ,formState: { errors }, } = useForm<IFormInputSignIn>({
    resolver: yupResolver(signinSchema),
  });
  const onSubmit: SubmitHandler<IFormInputSignIn> = async  (data) => {
    console.log(data);
0

    try {
      const res : any = await  SignInFunction(data);
      if (res.error) {
        console.log(res.error)
        toast.error(`${res.error.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      if (res.data) {
        toast.success(`${res.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
        localStorage.setItem("token",res.data.payload.token)
        push("/");
      }
    } catch (error) {
      console.log(error);
    }




  };
  const SignInInputs = SignInFormData.map((input) => (
    <>
      <TextField
      {...register(input.id)}
      sx={{ display: "block" }}
      fullWidth
      id={input.id}
      label={input.label}
      variant="outlined"
      type={input.type}
    />

    {errors[input.id] && <InputError msg={errors[input.id]?.message} />}

      </>

  ));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          spacing={2}
        >
          {SignInInputs}
          <Button
            variant="contained"
            disabled={isLoading}
            type="submit"
            className="w-fit bg-main mx-auto px-10 text-xl mt-6"
          >
            {isLoading ? <Loader /> : "submit"}
            submit
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default SignInForm;
