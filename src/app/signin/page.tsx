import SignInForm from "@/components/SignInForm";
import { Box, Container, Stack, Typography } from "@mui/material";

function page() {
  return (
   
      <Box
        sx={{
          height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            width: "48%",
            textAlign: "center",
          }}
        >
           <Typography
          variant="h1"
          className="text-main text-4xl font-bold mb-8 text-center "
        >
          NETH-BOOKPOINT
        </Typography>

          {<SignInForm />}
          <Typography>
            Unlock a world of knowledge by registering with us today!
          </Typography>
        </Stack>
      </Box>
    
  );
}

export default page;
