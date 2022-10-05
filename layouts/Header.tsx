import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyle = styled(Box)({
  backgroundColor: "transparent",
  position: "fixed",
  width: "100vw",
  zIndex: 9999,
});

const Container = styled(Grid)({
  padding: "16px 2%",
  alignItems: "center",
  justifyContent: "space-between",
});

const LogoStyle = styled("img")({
  margin: "10%",
  maxWidth: "50%",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "transparent",
  fontSize: "16px",
  fontWeight: 500,
  color: "#FFFFFF",
  textTransform: "none",
});

function Header() {
  return (
    <RootStyle style={{ backgroundColor: "transparent" }}>
      <Container container spacing={2}>
        <Grid>
          <LogoStyle src="/Logo.svg" alt="logo" />
        </Grid>
        <Grid>
          <ButtonStyle>Discover</ButtonStyle>
          <ButtonStyle>Special Deal</ButtonStyle>
          <ButtonStyle>Community</ButtonStyle>
          <ButtonStyle>About us</ButtonStyle>
          <ButtonStyle style={{ backgroundColor: "rgba(252, 252, 253, 0.2)" }}>
            Register
          </ButtonStyle>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export default Header;
