import { styled } from "@mui/material/styles";
import { Card, CardContent, CardMedia, Box, Grid } from "@mui/material";
import { data_experience } from "../../data/data_experience";

export default function ExploreExperience() {
  const RootStyle = styled(Grid)({
    marginTop: "120px",
    justifyContent: "center",
  });

  const HeadingContainer = styled(Grid)({
    marginBottom: "72px",
    justifyContent: "left",
    flexDirection: "column",
  });

  const ContentContainer = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  });

  const ContentItem = styled(Card)({
    border: "0",
    boxShadow: "none",
  });

  const ContentText = styled(Box)({
    display: "flex",
    alignItem: "center",
    justifyContent: "left",
  });

  const DetailSpan = styled(Box)({
    textAlign: "center",
    color: "#6F767E",
    display: "block",
    margin: "auto",
  });

  const CardContentText = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
  });

  const Heading = styled(Box)<{
    page: { SubHeading: boolean; Heading: boolean };
  }>(({ theme, page }) => ({
    display: "block",
    textAlign: "left",
    ...(page.SubHeading && {
      color: " #6F767E",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
      marginTop: "8px",
    }),
    ...(page.Heading && {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "120%",
      color: "#1A1D1F",
    }),
  }));

  const CardContentTitle = styled("span")({
    textAlign: "center",
    fontWeight: "600",
    color: "#1A1D1F#1A1D1F",
    fontSize: "20px",
  });

  const data = data_experience;
  return (
    <RootStyle container columns={{ xs: 9, md: 9 }}>
      <HeadingContainer container xs={12} md={9}>
        <Heading page={{ SubHeading: false, Heading: true }}>
          Explore more great experience
        </Heading>
        <Heading page={{ SubHeading: true, Heading: false }}>
          We are here to help you find great vacation
        </Heading>
      </HeadingContainer>

      <ContentContainer container spacing={1.5} md={9}>
        {data.map((item, index) => (
          <Grid item xs={8} md={3} justifyContent="center" key={index}>
            <ContentItem>
              <CardMedia
                width="297px"
                component="img"
                height="297"
                image={item.img}
                alt="green iguana"
              />
              <CardContentText>
                <CardContentTitle>{item.title}</CardContentTitle>
                <ContentText>
                  <DetailSpan>{item.detail}</DetailSpan>
                </ContentText>
              </CardContentText>
            </ContentItem>
          </Grid>
        ))}
      </ContentContainer>
    </RootStyle>
  );
}
