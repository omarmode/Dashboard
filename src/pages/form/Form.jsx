import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import deveWalkAnimation from "../../../public/Animation - 1719965197372.json";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = () => {
    console.log("data");
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        // "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", gap: 2, direction: "row" }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Box>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber)
            ? "Please provide a valid Phone number"
            : null
        }
        {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Adress1" variant="filled" />
      <TextField label="Adress2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box textAlign={"right"}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>

      <Box
        sx={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          display: {
            sx: "none",
            sm: "none",
            md: "flex",
          },
        }}
      >
        {/* <Lottie
          loop={true}
          style={{ height: "200px" }}
          animationData={deveWalkAnimation}
        /> */}
        <Lottie
          loop={true}
          style={{ height: "300px" }}
          animationData={deveWalkAnimation}
        />
      </Box>
    </Box>
  );
}

export default Form;
