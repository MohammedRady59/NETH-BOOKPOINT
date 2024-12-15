import { Box, Typography } from "@mui/material";
import SignForm from "@/components/SignForm";

function Signup() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40%",
          padding: "10px",
        }}
      >
        <Typography
          variant="h1"
          className="text-main text-4xl font-bold mb-8 text-center "
        >
          NETH-BOOKPOINT
        </Typography>
        <SignForm />
      </Box>
    </Box>
  );
}

export default Signup;
