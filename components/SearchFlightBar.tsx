import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Input,
  Typography,
  Button,
  InputAdornment,
  FormControl,
  Grid,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";
import {
  DateRange,
  DateRangePicker,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/system";
import Countries from "./CountrySelection";

export default function SearchFlightBar() {
  const [open, setOpen] = useState(false);
  const [fromDes, setFromDes] = useState("");
  const [toDes, setToDes] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const [valuePeople, setPeopleValue] = useState("eg.20");
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [date, setDate] = useState(1);

  const peopleInput = useRef(null);

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
    color: valuePeople === "eg.20" ? "#6F767E" : "#4669CD",
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

  useEffect(() => {
    if (toDes === fromDes) {
      setToDes("");
    }
    if (toDes !== "" && fromDes !== "") {
      setOpen(false);
    }
  }, [toDes, fromDes]);

  useEffect(() => {
    if (value[0] !== null && value[1] !== null) {
      setOpenCalendar(false);
    }
  }, [date, value]);

  return (
    <RootStyle container md={9} xs={9}>
      <Grid container xs={9} md={3}>
        <FormControl fullWidth>
          <LocationDateSelectionLabel>Location</LocationDateSelectionLabel>
          <LocationInputBox
            onClick={() => {
              setOpen(!open);
              setOpenCalendar(false);
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
        <FormControl fullWidth>
          <LocationDateSelectionLabel>Date</LocationDateSelectionLabel>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: "", end: "" }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                if (date === 1) {
                  setDate(date - 1);
                  setValue(() => {
                    value[date] = newValue[0];
                    return value;
                  });
                } else {
                  setDate(date + 1);
                  setValue(() => {
                    value[date] = newValue[0];
                    return value;
                  });
                }
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <BoxCalendar
                    page={{ CalendarBox: true, InputCalendar: false }}
                    onClick={() => setOpenCalendar(!openCalendar)}
                  >
                    <CalendarIcon src="icon/calendar.svg" />
                    <BoxCalendar
                      page={{ CalendarBox: false, InputCalendar: true }}
                    >
                      {value[1] !== null ? (
                        value[1].toString()
                      ) : (
                        <DefaultInputBox>Choose your time</DefaultInputBox>
                      )}
                    </BoxCalendar>
                    <BoxCalendar
                      page={{ CalendarBox: false, InputCalendar: true }}
                    >
                      {value[0] !== null ? (
                        <BoxCalendar
                          page={{
                            CalendarBox: false,
                            InputCalendar: false,
                          }}
                        >
                          <Remove /> {value[0].toString()}
                        </BoxCalendar>
                      ) : (
                        " "
                      )}
                    </BoxCalendar>
                    {openCalendar ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </BoxCalendar>
                </React.Fragment>
              )}
              open={openCalendar}
            />
          </LocalizationProvider>
        </FormControl>
      </Grid>

      <Grid
        container
        xs={9}
        md={1}
        onClick={() => {
          setOpen(false);
          setOpenCalendar(false);
          setPeopleValue("");
        }}
      >
        <FormControl fullWidth>
          <LocationDateSelectionLabel>People</LocationDateSelectionLabel>
          <PeopleInput
            ref={peopleInput}
            id="input-with-icon-adornment"
            placeholder="eg.20"
            autoFocus={true}
            value={valuePeople}
            onChange={(val) => {
              setPeopleValue(val.target.value);
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
        <SearchBtn variant="contained"> Search Flight</SearchBtn>
      </Grid>

      {open && <Countries setFromDes={setFromDes} setToDes={setToDes} />}
    </RootStyle>
  );
}
