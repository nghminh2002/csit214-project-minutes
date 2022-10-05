import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function TitleBanner() {
  const RootStyle = styled(Box)({
    width: "100%",
  });

  const HeadingBanner = styled(Typography)({
    position: "absolute",
    color: "#FFFFFF",
    fontSize: "76px",
    fontWeight: "700",
    lineHeight: "92px",
    zIndex: "9999",
    maxWidth: "603px",
    fontFamily: "Inter",
    display: "block",
    top: "50%",
    left: "12.5%",
    transform: "translateY(-50%)",
    fontStyle: "normal",
  });

  const SubHeading = styled(Typography)({
    position: "absolute",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Inter",
    width: "75%",
    lineHeight: "24px",
    top: "72%",
    left: "50%",
    zIndex: "9999",
    transform: "translate(-50%,-50%)",
    fontStyle: "normal",
  });

  return (
    <RootStyle>
      <HeadingBanner>Find next place to visit</HeadingBanner>
      <br />
      <SubHeading>
        This modern trend looks nice and all, but we fell into the same trap
        again.
      </SubHeading>
    </RootStyle>
  );
}
