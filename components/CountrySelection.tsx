import { Box, List, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { data_countries } from "../data/data_countries";

export default function Countries({ setToDes, setFromDes }: any) {
  const RootStyle = styled(Box)({
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    display: "flex",
    top: 100,
    left: 50,
    zIndex: 999,
    borderRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    gap: 20,
    padding: "32px 20px",
    background: "#FFFFFF",
  });

  const CountriesBox = styled(Box)({
    width: "100%",
  });

  const HeadingSpan = styled(Box)({
    padding: 12,
    fontWeight: "bold",
    color: "#000000",
  });

  const ListStyle = styled(List)({
    listStyle: "none",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  });

  const IconStyled = styled(LocationOn)({
    color: "#4669CD",
    marginRight: 28,
  });

  const ListCountries = styled(Typography)({
    color: "#000000",
  });

  return (
    <RootStyle width={{ xs: "60wh", md: "800px" }}>
      <CountriesBox>
        <HeadingSpan>From Location</HeadingSpan>
        <hr />
        {data_countries.map((country, index) => (
          <>
            <ListStyle
              onClick={() => {
                setFromDes(country);
              }}
              key={index}
            >
              <IconStyled />
              <ListCountries>{country}</ListCountries>
            </ListStyle>
          </>
        ))}
      </CountriesBox>
      <CountriesBox>
        <HeadingSpan>To Location</HeadingSpan>
        <hr />
        {data_countries.map((country) => (
          <>
            <ListStyle
              onClick={() => {
                setToDes(country);
              }}
              key={country}
            >
              <IconStyled />
              <ListCountries>{country}</ListCountries>
            </ListStyle>
          </>
        ))}
      </CountriesBox>
    </RootStyle>
  );
}
