import type { NextPage } from "next";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFlightBar from "../components/SearchFlightBar";
import EveryThingInOnePlace from "../layout/homepage/EveryThingInOnePlace";
import ExploreExperience from "../layout/homepage/ExploreExperience";
import ExploreVacation from "../layout/homepage/ExploreVacation";
import TitleBanner from "../layout/homepage/TitleBanner";

const Banner = styled(Box)({
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Background1.svg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backdropFilter: "blur(2px)",
  height: "700px",
  position: "relative",
});

const Home: NextPage = () => (
  <Box>
    <Header />
    <Banner>
      <TitleBanner />
    </Banner>
    <SearchFlightBar />
    <ExploreVacation />
    <ExploreExperience />
    <EveryThingInOnePlace />
    <Footer />
  </Box>
);

export default Home;
