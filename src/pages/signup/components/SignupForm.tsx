import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useSignupForm } from "../hooks/useSignupForm";
import { Form, useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const { getFieldProps, dirty, errors, touched, isValid } = useSignupForm();
  const navigate = useNavigate();

  return (
    <Stack spacing={2} component={Form} width={{ xs: "100%", md: "380px" }}>
      <Box>
        <Typography
          fontFamily="Public Sans"
          color="#272930"
          fontSize={20}
          gutterBottom
        >
          Sign Up
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.500" }}>
          Get started for free
        </Typography>
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Username"
        {...getFieldProps("username")}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
      />
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Password"
        type="password"
        {...getFieldProps("password")}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <FormControl error={touched.acceptTerms && Boolean(errors.acceptTerms)}>
        <FormControlLabel
          control={
            <Checkbox
              {...getFieldProps("acceptTerms")}
              color="primary"
              checked={getFieldProps("acceptTerms").value}
            />
          }
          label="I accept the terms and conditions"
        />
        <FormHelperText>
          {touched.acceptTerms && errors.acceptTerms}
        </FormHelperText>
      </FormControl>
      <Button fullWidth disabled={!dirty || !isValid} type="submit">
        Signup
      </Button>
      <Box display="flex" columnGap={2}>
        <Link
          fontWeight={500}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login to account
        </Link>
        <Link fontWeight={500} sx={{ cursor: "pointer" }}>
          Forgot password?
        </Link>
      </Box>
    </Stack>
  );
};
