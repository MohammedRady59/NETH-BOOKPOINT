import { Typography } from "@mui/material";

interface IProps {
  msg?: string;
}
function InputError({ msg }: IProps) {
  return (
    <Typography className="block text-red-700 font-semibold text-sm py-[2px] bg-red-100 px-[1px]">
      {msg}
    </Typography>
  );
}

export default InputError;
