import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function EveryThingInOnePlace() {
  const RootStyle = styled(Grid)({
    backgroundColor: "#4669CD",
    borderRadius: "12px",
    margin: "auto",
    marginTop: "67px",
    marginBottom: "87px",
    minHeight: "384px",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  });

  const EveryThingInOnePlaceImage = styled("img")({
    objectFit: "cover",
  });

  const Heading = styled(Box)({
    color: "white",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "120%",
    marginBottom: "12px",
  });

  const SubHeading = styled(Typography)({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#F4F5F6",
  });

  const SearchFlightButton = styled(Button)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 32px",
    gap: "8px",
    width: "180px",
    height: "48px",
    background: " #FCFCFD",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#4669CD",
    lineHeight: "150%",
    textTransform: "none",
    marginTop: "56px",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
    },
  });

  return (
    <RootStyle container xs={9} md={9}>
      <Grid item xs={9} sm={8} md={5}>
        <EveryThingInOnePlaceImage src="homePageImg/BannerOnePage.png" />
      </Grid>

      <Grid item xs={9} sm={9} md={5}>
        <Heading>Everything in one place</Heading>
        <SubHeading>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enimv
        </SubHeading>
        <SearchFlightButton variant="contained" disableRipple>
          Search Flight
        </SearchFlightButton>
      </Grid>
    </RootStyle>
  );
}
