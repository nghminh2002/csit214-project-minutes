import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyle = styled(Box)({
  backgroundColor: "#000",
  botton: 0,
});

const Container = styled(Grid)({
  padding: "16px 4%",
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

function Footer() {
  return (
    <RootStyle>
      <Container container spacing={2}>
        <Grid>
          <LogoStyle src="/Logo.svg" alt="logo" />
        </Grid>
        <Grid>
          <ButtonStyle>Discover</ButtonStyle>
          <ButtonStyle>Special Deal</ButtonStyle>
          <ButtonStyle>Community</ButtonStyle>
          <ButtonStyle>About us</ButtonStyle>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export default Footer;
