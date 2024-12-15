/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormSignup } from "@/data";
import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignup } from "@/Interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/validation/schema";
import InputError from "./InputError";
import { useSignupMutation } from "@/redux/features/Api/Authapi";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function SignForm() {
  const { push } = useRouter();
  const [signupUser, { isLoading }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<ISignup> = async (data) => {
    try {
      const res: any = await signupUser(data);
      if (res.error) {
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
        push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderSignup = FormSignup.map((el, idx) => (
    <FormControl key={idx} className="w-full mb-3 ">
      <TextField
        id={el.id}
        label={el.label}
        type={el.type}
        {...register(el.id)}
      />
      {errors[el.id] && <InputError msg={errors[el.id]?.message} />}
    </FormControl>
  ));
  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {renderSignup}
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row aria-labelledby="gender-radio-group">
            <FormControlLabel
              value="female"
              {...register("gender")}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              {...register("gender")}
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
          {errors.gender && <InputError msg={"Enter Your Gender"} />}
          <Button
            variant="contained"
            disabled={isLoading}
            type="submit"
            className="w-fit bg-main mx-auto px-10 text-xl mt-6"
          >
            {isLoading ? <Loader /> : "submit"}
          </Button>
        </FormControl>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          textAlign: "center",
          mt: "10px",
        }}
      >
        Unlock a world of knowledge by registering with us today!
      </Typography>
    </>
  );
}

export default SignForm;
