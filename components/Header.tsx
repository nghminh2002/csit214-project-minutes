import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyle = styled(Box)(({ page }: HeaderType) => ({
  backgroundColor: page == "homepage" ? "transparent" : "#FFF",
  color: page == "homepage" ? "#FFF" : "#000",
  position: "fixed",
  width: "100vw",
  zIndex: 9999,
}));

const Container = styled(Grid)({
  padding: "0px 4%",
  alignItems: "center",
  justifyContent: "space-between",
});

const LogoStyle = styled("img")({
  margin: "5%",
  maxWidth: "50%",
});

const ButtonContainer = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
});

const ButtonStyle = styled(Button)(({ page }: HeaderType) => ({
  backgroundColor: "transparent",
  color: page == "homepage" ? "#FFFFFF" : "#000000",
  fontSize: "clamp(0.875rem, 1.25rem, 1.5rem)",
  fontWeight: 500,
  textTransform: "none",
  margin: "0% 1%",
  padding: "5px 20px",
}));

type HeaderType = {
  page: string;
};

function Header(props: HeaderType) {
  return (
    <RootStyle page={props.page}>
      <Container container spacing={2}>
        <Grid item xs={4}>
          <a href="/">
            <LogoStyle
              src={
                props.page == "homepage" ? "/Logo.svg" : "/BookFlightLogo.svg"
              }
              alt="logo"
            />
          </a>
        </Grid>
        <ButtonContainer item xs={8}>
          <ButtonStyle page={props.page}>Discover</ButtonStyle>
          <ButtonStyle page={props.page}>Special Deal</ButtonStyle>
          <ButtonStyle page={props.page}>Community</ButtonStyle>
          <ButtonStyle page={props.page}>About us</ButtonStyle>
          <ButtonStyle
            page={props.page}
            style={{
              backgroundColor:
                props.page == "homepage"
                  ? "rgba(252, 252, 253, 0.2)"
                  : "#4669CD",
              color: "#FFFFFF",
            }}
          >
            Register
          </ButtonStyle>
        </ButtonContainer>
      </Container>
    </RootStyle>
  );
}

export default Header;
