import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Router from "next/router";
import { StepBar } from "../components/StepBar";

const BackGround = styled(Box)({
  backgroundColor: "rgb(244,245,246)",
  height: "100vh",
  maxWidth: "100vw",
});

const Container = styled(Grid)({
  backgroundColor: "#FFFFFF",
  width: "85%",
  height: "500px",
  borderRadius: "12px",
  margin: "16px 0 0 8%",
  padding: "30px 20px 30px 3%",
});

const Adult = styled(Typography)({
  color: "#1A1D1F",
  fontWeight: "400",
  fontSize: "16px",
  paddingBottom: "20px",
});

const PassengerHeading = styled(Box)({
  color: "#4669CD",
  fontSize: "32px",
  fontWeight: "600",
  padding: "30px 0 15px 8%",
});

const SubHeading = styled(Box)({
  color: "#000000",
  fontWeight: "400",
  fontSize: "16px",
  padding: "0 0 1% 8%",
});

const InputHeading = styled(Typography)({
  color: "#1A1D1F",
  fontWeight: "680",
  fontSize: "20px",
  paddingTop: "30px",
});

const InputGrid = styled(Grid)({
  marginTop: "20px",
});

const DescriptionBox = styled(Box)({
  borderBottom: "1px solid #E6E8EC",
});

const ErrorMessage = styled(Typography)({
  color: "red",
  fontSize: "14px",
});

const NextButton = styled(Button)({
  float: "right",
  margin: "0px -1% 0 0",
});

function Passenger() {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    mail: "",
    nation: "",
    gender: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({} as ErrorsType);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [nationError, setNationError] = useState(false);
  const [genderError, setGenderError] = useState(false);

  const handleFormChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  type PassengerInfoType = {
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
    nation: string;
    gender: string;
  };

  type ErrorsType = {
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
    nation: string;
    gender: string;
  };

  const validate = (values: PassengerInfoType) => {
    const errors: any = {};
    const nameRegex = /^[a-z ,.'-]+$/i;
    const phoneRegex = /^[0-9\-\+]{9,15}$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName.trim()) {
      errors.firstName = "Please enter your first name!";
      setFirstNameError(true);
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = "Invalid name";
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (!values.lastName.trim()) {
      errors.lastName = "Please enter your last name!";
      setLastNameError(true);
    } else if (!nameRegex.test(values.lastName)) {
      errors.lastName = "Invalid name";
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    if (!values.phone.trim()) {
      errors.phone = "Please enter your phone number!";
      setPhoneError(true);
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid phone number";
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (!values.mail.trim()) {
      errors.mail = "Please enter your email!";
      setMailError(true);
    } else if (!emailRegex.test(values.mail)) {
      errors.mail = "Invalid email";
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (!values.nation) {
      errors.nation = "Please select your nationality!";
      setNationError(true);
    } else {
      setNationError(false);
    }

    if (!values.gender) {
      errors.gender = "Please select your gender!";
      setGenderError(true);
    } else {
      setGenderError(false);
    }
    return errors;
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    localStorage.setItem("passenger", "done");
    Router.push("/seat");
  };

  const generateForm = () => {
    const list = [];
    if (typeof window !== "undefined") {
      const numberOfPassenger = localStorage.getItem("number-of-people");
      if (numberOfPassenger != undefined || numberOfPassenger != null) {
        for (let i = 0; i < parseInt(numberOfPassenger); i++) {
          list.push(i);
        }
        return list.map((i) => (
          <Container key={`item-${i}`}>
            <DescriptionBox>
              <Adult>ADULT {i + 1} ( Adult )</Adult>
            </DescriptionBox>
            <InputHeading>PASSENGER DETAILS</InputHeading>
            <InputGrid container style={{ marginBottom: "20px" }}>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Middle & First Name"
                    variant="outlined"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleFormChange}
                    error={firstNameError}
                  />
                  <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Last/Family Name"
                    variant="outlined"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleFormChange}
                    error={lastNameError}
                  />
                  <ErrorMessage>{formErrors.lastName}</ErrorMessage>
                </Box>
              </Grid>
            </InputGrid>
            <InputGrid container>
              <Grid item xs={6}>
                <Box sx={{ maxWidth: "97%" }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      error={genderError}
                    >
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="gender"
                      value={formValues.gender}
                      label="Gender"
                      onChange={handleFormChange}
                      error={genderError}
                    >
                      <MenuItem value="Men">Men</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    <ErrorMessage>{formErrors.gender}</ErrorMessage>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ maxWidth: "97%" }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      error={nationError}
                    >
                      Nationality
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="nation"
                      value={formValues.nation}
                      label="Nationality"
                      onChange={handleFormChange}
                      error={nationError}
                    >
                      <MenuItem value="VN">Vietnam</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="AUS">Australia</MenuItem>
                      <MenuItem value="UK">UK</MenuItem>
                    </Select>
                    <ErrorMessage>{formErrors.nation}</ErrorMessage>
                  </FormControl>
                </Box>
              </Grid>
            </InputGrid>
            <InputHeading>Contact Info</InputHeading>
            <InputGrid container>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleFormChange}
                    error={phoneError}
                  />
                  <ErrorMessage>{formErrors.phone}</ErrorMessage>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required
                    id="outlined-basic"
                    label="Email Adress"
                    variant="outlined"
                    name="mail"
                    value={formValues.mail}
                    onChange={handleFormChange}
                    error={mailError}
                  />
                  <ErrorMessage>{formErrors.mail}</ErrorMessage>
                </Box>
              </Grid>
            </InputGrid>
          </Container>
        ));
      } else {
        return <Box>An error is happening</Box>;
      }
    } else {
      return <Box>An error is happening</Box>;
    }
  };

  return (
    <Grid sx={{ backgroundColor: "rgb(244,245,246)" }}>
      <Header page={"BookFlight"} />
      <Banner />
      <StepBar />
      <BackGround>
        <PassengerHeading>Passengers</PassengerHeading>
        <SubHeading>Fill passenger detail</SubHeading>
        <Box>{generateForm()}</Box>
        <Container
          style={{ backgroundColor: "rgb(244,245,246)", height: "200px" }}
        >
          <NextButton variant="contained" onClick={handleSubmit}>
            Next Step
          </NextButton>
        </Container>
      </BackGround>
      <Footer />
    </Grid>
  );
}

export default Passenger;
