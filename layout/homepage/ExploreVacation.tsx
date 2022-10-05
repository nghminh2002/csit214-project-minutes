import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Star } from "@mui/icons-material";
import { data_vaction } from "../../data/data_vacation";

export default function ExporeVacation() {
  const ContentContainer = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  });

  const ContentTitle = styled(Typography)({
    fontSize: "20px",
    color: "#1A1D1F#1A1D1F",
    fontWeight: 600,
  });

  const ContentDetails = styled(Box)({
    display: "flex",
    alignItem: "center",
    justifyContent: "left",
  });

  const Rating = styled(Typography)({
    fontWeight: "bold !important",
    display: "flex",
    alignItem: "center",
    justifyContent: "left",
  });

  const ReviewSpan = styled(Typography)({
    marginLeft: "16px",
    color: "#6F767E",
  });

  const Heading = styled(Box)({
    textAlign: "center",
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "120%",
    color: "#1A1D1F",
  });

  const SubHeading = styled(Box)({
    color: " #6F767E",
    textAlign: "center",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "150%",
    marginTop: "8px",
  });

  const IconStar = styled(Star)({
    color: "#FCD635",
  });

  const data = data_vaction;
  return (
    <Grid marginTop={{ xs: "200px", md: "-72px" }}>
      <Grid item marginBottom={{ xs: "42px", md: "40px" }}>
        <Heading>Explore more travel vacation</Heading>
        <SubHeading>We are here to help you find great vacation</SubHeading>
      </Grid>

      <ContentContainer container spacing={1.5}>
        {data.map((item, index) => (
          <Grid item xs={8} md={3} key={index}>
            <Card>
              <CardMedia
                width="403px"
                component="img"
                height="320"
                image={item.img}
                alt="green iguana"
              />
              <CardContent>
                <ContentTitle gutterBottom variant="h5">
                  {item.title}
                </ContentTitle>
                <ContentDetails component="div">
                  <Rating>
                    <IconStar />
                    {item.rating}
                  </Rating>
                  <ReviewSpan>{item.review}k review</ReviewSpan>
                </ContentDetails>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </ContentContainer>
    </Grid>
  );
}
