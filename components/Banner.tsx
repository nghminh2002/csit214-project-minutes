import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const HeaderBanner = styled(Box)({
  backgroundImage: "url(/BookFlightBanner.svg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backdropFilter: "blur(2px)",
  height: "700px",
  position: "relative",
});

export default function Banner() {
  return <HeaderBanner/>;
}
