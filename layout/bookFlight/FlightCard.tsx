import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, Button } from "@mui/material";
import Router from "next/router";

const RootStyle = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: "80px",
  borderRadius: "12px",
});

const ResultShow = styled(Typography)({
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 400,
});

const FlightInfoCard = styled(Grid)({
  border: "1px solid rgba(0, 0, 0, 0.2)",
  margin: "40px 0px",
  padding: "20px 30px",
  borderRadius: "12px",
});

const FlightName = styled(Typography)({
  color: "#000000",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 700,
  lineHeight: "1.75rem",
});

const FlightDate = styled(Typography)({
  color: "#000000",
  fontSize: "clamp(0.75rem, 1rem, 1.25rem)",
  fontWeight: 400,
  display: "flex",
  lineHeight: "1.75rem",
});

const HourStyle = styled(Typography)({
  color: "rgba(70, 105, 205, 1)",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 700,
  lineHeight: "1.75rem",
});

const MoneyStyle = styled(Typography)({
  color: "rgba(70, 105, 205, 1)",
  fontSize: "clamp(1.5rem, 2rem, 2.5rem)",
  fontWeight: 700,
  lineHeight: "3rem",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "rgba(70, 105, 205, 1)",
  color: "#FFFFFF",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 400,
  padding: "10px 15px",
  maxHeight: "2.5rem",
  maxWidth: "10rem",
  textTransform: "capitalize",
  "&hover": {
    backgroundColor: "rgba(70, 105, 205, 1.5)",
  },
});

type FlightCardType = {
  fromDes: string | null;
  toDes: string | null;
  fromDate: string | null;
  toDate: string | null;
};

export default function FlightCard(props: FlightCardType) {
  const handleClick = (flightNumber: number) => {
    if (flightNumber === 1) {
      localStorage.setItem("flightNumber", "KAP-3469");
    } else if (flightNumber === 2) {
      localStorage.setItem("flightNumber", "KAP-3542");
    } else if (flightNumber === 3) {
      localStorage.setItem("flightNumber", "KAP-3727");
    }
    localStorage.setItem("book-flight", "done");
    Router.push("/passenger");
  };
  return (
    <RootStyle>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ResultShow>3 results to display</ResultShow>
        <Box sx={{ display: "flex" }}>
          <ResultShow>SORT BY: &#8964; &nbsp; &nbsp;</ResultShow>
          <ResultShow>SHOW FILTERS: &#8964;</ResultShow>
        </Box>
      </Box>
      <FlightInfoCard container spacing={1}>
        <Grid container xs={10} spacing={1}>
          <Grid item xs={7}>
            <FlightName>
              {props.fromDes} - {props.toDes}
            </FlightName>
            <FlightDate>{props.fromDate}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>07:05</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>08:05</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3469</FlightName>
          </Grid>
          <Grid item xs={7}>
            <FlightName>
              {props.toDes} - {props.fromDes}
            </FlightName>
            <FlightDate>{props.toDes}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>10:35</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>11:45</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3470</FlightName>
          </Grid>
        </Grid>
        <Grid
          container
          xs={2}
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: " center",
            justifyContent: "center",
          }}
        >
          <MoneyStyle>456AUD</MoneyStyle>
          <ButtonStyle onClick={() => handleClick}>Purchase</ButtonStyle>
        </Grid>
      </FlightInfoCard>
      <FlightInfoCard container spacing={1}>
        <Grid container xs={10} spacing={1}>
          <Grid item xs={7}>
            <FlightName>
              {props.fromDes} - {props.toDes}
            </FlightName>
            <FlightDate>{props.fromDate}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>10:27</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>11:30</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3542</FlightName>
          </Grid>
          <Grid item xs={7}>
            <FlightName>
              {props.toDes} - {props.fromDes}
            </FlightName>
            <FlightDate>{props.toDes}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>10:35</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>11:45</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3470</FlightName>
          </Grid>
        </Grid>
        <Grid
          container
          xs={2}
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: " center",
            justifyContent: "center",
          }}
        >
          <MoneyStyle>345AUD</MoneyStyle>
          <ButtonStyle onClick={() => handleClick(2)}>Purchase</ButtonStyle>
        </Grid>
      </FlightInfoCard>
      <FlightInfoCard container spacing={1}>
        <Grid container xs={10} spacing={1}>
          <Grid item xs={7}>
            <FlightName>
              {props.fromDes} - {props.toDes}
            </FlightName>
            <FlightDate>{props.fromDate}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>22:05</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>23:15</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3727</FlightName>
          </Grid>
          <Grid item xs={7}>
            <FlightName>
              {props.toDes} - {props.fromDes}
            </FlightName>
            <FlightDate>{props.toDes}</FlightDate>
            <Grid container style={{ marginBottom: "30px" }}>
              <Grid item xs={3}>
                <HourStyle>10:35</HourStyle>
                <ResultShow>MAN</ResultShow>
              </Grid>
              <Grid item xs={3}>
                <img src="./icon/AirplaneIcon.svg" alt="Airplane icon" />
              </Grid>
              <Grid item xs={3}>
                <HourStyle>11:45</HourStyle>
                <ResultShow>NTL</ResultShow>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ alignSelf: "center" }}>
            <FlightName>KAP-3470</FlightName>
          </Grid>
        </Grid>
        <Grid
          container
          xs={2}
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: " center",
            justifyContent: "center",
          }}
        >
          <MoneyStyle>345AUD</MoneyStyle>
          <ButtonStyle onClick={() => handleClick(3)}>Purchase</ButtonStyle>
        </Grid>
      </FlightInfoCard>
    </RootStyle>
  );
}
