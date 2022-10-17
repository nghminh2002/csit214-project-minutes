import React, { useState, useEffect, useRef } from "react";
import Router from "next/router";
import { styled } from "@mui/material/styles";
import {
  Input,
  Typography,
  Button,
  InputAdornment,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/system";
import Countries from "./CountrySelection";

const RootStyle = styled(Grid)({
  backgroundColor: "#FCFCFD",
  zIndex: 9,
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  height: "136px",
  padding: "24px 26px",
  gap: 8,
  position: "relative",
  borderRadius: "12px",
  GridShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  transform: "translateY(-50%)",
  alignItems: "center",
  marginBottom: "72px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
});

const LocationSelectionBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const LocationInputBox = styled(Box)({
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  border: "1px solid #CCCC",
  borderRadius: "8px",
});

const LocationIcon = styled("img")({
  padding: "3px",
  marginLeft: "10px",
  marginTop: "4px",
});

const LocationDateSelectionLabel = styled(Typography)({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "150%",
  color: "black",
  padding: "8px",
});

const DefaultInputBox = styled(Typography)({
  color: "#6F767E",
  fontSize: "16px",
  paddingTop: "1px",
});

const InPutText = styled(Typography)({
  display: "inline",
  color: "#4669CD",
});

const PeopleInput = styled(Input)({
  marginTop: "5px",
  borderRadius: "8px",
  border: "1px solid #CCCC",
  height: "40px",
  paddingRight: "5px",
  minWidth: "100px",
});

const KeyboardArrowUpIcon = styled(KeyboardArrowUp)({
  color: "#4669CD",
});

const KeyboardArrowDownIcon = styled(KeyboardArrowDown)({
  color: "#4669CD",
});

const CalendarIcon = styled("img")({
  marginLeft: "8px",
  padding: "3px",
});

const SearchBtn = styled(Button)({
  padding: "20px 32px",
  gap: 8,
  marginTop: "15px",
});

const BoxCalendar = styled(Box)<{
  page: { CalendarBox: boolean; InputCalendar: boolean };
}>(({ theme, page }) => ({
  display: "flex",
  height: "40px",
  alignItems: "center",
  color: "#4669CD",
  ...(page.CalendarBox && {
    maxWidth: "400px",
    minWidth: "350px",
    border: "2px solid #ced4da",
    cursor: "pointer",
    borderRadius: "8px",
    position: "relative",
    justifyContent: "space-between",
    marginLeft: "-5px",
  }),
  ...(page.InputCalendar && {
    width: "120%",
    textOverflow: "clip",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginLeft: "2px",
  }),
}));

export default function SearchFlightBar() {
  const [open, setOpen] = useState(false);
  const [fromDes, setFromDes] = useState("");
  const [toDes, setToDes] = useState("");
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(
    dayjs("2022-10-30")
  );
  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs("2022-11-15"));
  const [valuePeople, setPeopleValue] = useState("");
  const peopleInput = useRef(null);

  useEffect(() => {
    const dateFrom = localStorage.getItem("from-date");
    const dateTo = localStorage.getItem("to-date");
    if (
      dateFrom == null &&
      dateFrom == undefined &&
      dateTo == null &&
      dateTo == undefined
    ) {
      localStorage.setItem("from-date", "30/10/2022");
      localStorage.setItem("to-date", "15/11/2022");
    }
  }, []);

  const handleFromDateChange = (newValue: Dayjs | null) => {
    setFromDate(newValue);
    if (newValue !== null && newValue !== undefined) {
      localStorage.setItem("from-date", newValue.format("DD/MM/YYYY"));
    }
  };

  const handleToDateChange = (newValue: Dayjs | null) => {
    setToDate(newValue);
    if (newValue !== null && newValue !== undefined) {
      localStorage.setItem("to-date", newValue.format("DD/MM/YYYY"));
    }
  };

  const handleClick = () => {
    const dateFrom = localStorage.getItem("from-date");
    const dateTo = localStorage.getItem("to-date");
    const desFrom = localStorage.getItem("from-destination");
    const desTo = localStorage.getItem("to-destination");
    const people = localStorage.getItem("number-of-people");
    if (
      dateFrom != null &&
      dateTo != null &&
      desFrom != null &&
      desTo != null &&
      people != null
    ) {
      Router.push("/book-flight");
    }
  };

  return (
    <RootStyle container md={9} xs={9}>
      <Grid container xs={9} md={3}>
        <FormControl fullWidth>
          <LocationDateSelectionLabel>Location</LocationDateSelectionLabel>
          <LocationInputBox
            onClick={() => {
              setOpen(!open);
            }}
          >
            <LocationSelectionBox>
              <Box>
                <LocationIcon src="icon/location.svg" />
              </Box>
              {fromDes !== "" || toDes !== "" ? (
                <BoxCalendar
                  page={{ CalendarBox: false, InputCalendar: false }}
                >
                  <InPutText>
                    {fromDes} to {toDes}
                  </InPutText>
                </BoxCalendar>
              ) : (
                <DefaultInputBox>Your desination</DefaultInputBox>
              )}
            </LocationSelectionBox>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </LocationInputBox>
        </FormControl>
      </Grid>

      <Grid
        container
        xs={9}
        md={4}
        onClick={() => {
          setOpen(false);
        }}
      >
        <FormControl fullWidth sx={{ display: "flex", flexDirection: "row" }}>
          <Grid style={{ margin: "0px 5%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <LocationDateSelectionLabel>From date</LocationDateSelectionLabel>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={fromDate}
                onChange={handleFromDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <LocationDateSelectionLabel>To date</LocationDateSelectionLabel>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={toDate}
                onChange={handleToDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </FormControl>
      </Grid>

      <Grid
        container
        xs={9}
        md={1}
        onClick={() => {
          setOpen(false);
          setPeopleValue("");
        }}
      >
        <FormControl fullWidth>
          <LocationDateSelectionLabel>People</LocationDateSelectionLabel>
          <PeopleInput
            ref={peopleInput}
            id="input-with-icon-adornment"
            placeholder="eg.1"
            autoFocus={true}
            value={valuePeople}
            onChange={(val) => {
              setPeopleValue(val.target.value);
              localStorage.setItem("number-of-people", val.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">
                <CalendarIcon src="icon/people.svg" />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Grid container xs={9} md={2}>
        <SearchBtn variant="contained" onClick={() => handleClick()}>
          {" "}
          Search Flight
        </SearchBtn>
      </Grid>

      {open && <Countries setFromDes={setFromDes} setToDes={setToDes} />}
    </RootStyle>
  );
}
