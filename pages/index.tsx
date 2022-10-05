import type { NextPage } from "next";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Banner = styled(Box)({
  backgroundImage: "url(/Background1.svg)",
  position: "relative",
  height: "50vh",
});

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Footer />
    </Box>
  );
};

export default Home;
