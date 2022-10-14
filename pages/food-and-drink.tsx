import HeaderSection from "../layout/menuSections/HeaderSection";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Menu from "../layout/menuSections/Menu";
import NextStepBtn from "../components/NextStepBtn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Router from "next/router";
import { StepBar } from "../components/StepBar";

export default function Foodanddrink({ nameFlight = "KAP-3469" }) {
  const RootStyle = styled(Box)({
    display: "block",
    width: "clamp(100vh, 100%, 100%)",
    background: "rgb(244,245,246)",
  });

  const passengerInfor = [
    {
      name: "Milly Nguyen",
      phone: "09123456",
      email: "millynguyen@gmail.com",
      menuSelected: [],
    },
    {
      name: "Marry Nguyen",
      phone: "09123456",
      email: "marrynguyen@gmail.com",
      menuSelected: [],
    },
  ];

  const handleClick = () => {
    localStorage.setItem("food-and-drink", "done");
    Router.push("/payment");
  };

  return (
    <RootStyle>
      <Header page="in-flight services" />
      <Banner />
      <StepBar />
      <HeaderSection nameFlight={nameFlight} />
      <Menu passengerInfor={passengerInfor} />
      <NextStepBtn handleSubmit={handleClick} />
      <Footer />
    </RootStyle>
  );
}
