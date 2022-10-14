import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { StepBar } from "../components/StepBar";
import FlightCard from "../layout/bookFlight/FlightCard";

const RootStyle = styled(Box)({
  display: "block",
  width: "clamp(100vh, 100%, 100%)",
  background: "rgb(244,245,246)",
});

const Title = styled(Typography)({
  color: "rgba(70, 105, 205, 1)",
  fontSize: "clamp(1.875rem, 2.25rem, 2.5rem)",
  fontWeight: 600,
});

const SubTitle = styled(Typography)({
  color: "#000000",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 400,
  display: "flex",
});

const FlightInformations = styled("span")({
  color: "rgba(70, 105, 205, 1)",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 700,
});

export default function BookFlight() {
  if (typeof window !== "undefined") {
    const dateFrom = localStorage.getItem("from-date");
    const dateTo = localStorage.getItem("to-date");
    const desFrom = localStorage.getItem("from-destination");
    const desTo = localStorage.getItem("to-destination");

    return (
      <RootStyle>
        <Header page="in-flight services" />
        <Banner />
        <StepBar />
        <Box sx={{ margin: " 4% 8%" }}>
          <Title>Select Flight</Title>
          <SubTitle>
            Select your flight for your &nbsp;
            <FlightInformations>
              {desFrom} - {desTo}
            </FlightInformations>
          </SubTitle>
        </Box>
        <Box sx={{ margin: " 4% 8%" }}>
          <FlightCard fromDate={dateFrom} toDate={dateTo} fromDes={desFrom} toDes={desTo}/>
        </Box>
        <Footer />
      </RootStyle>
    );
  } else {
    return (
      <RootStyle>
        <Header page="in-flight services" />
        <Banner />
        <Title>No flight was found</Title>
        <Footer />
      </RootStyle>
    );
  }
}
