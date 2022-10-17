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

  type PassengerInfoType = {
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
    nation: string;
    gender: string;
  };

  if (typeof window !== "undefined") {
    const passengerInfo = localStorage.getItem("passenger-values");
    if (passengerInfo !== null && passengerInfo !== undefined) {
      const initialValues: PassengerInfoType = JSON.parse(passengerInfo);
      const passengerInfor = [
        {
          name: initialValues.firstName + " " + initialValues.lastName,
          phone: initialValues.phone,
          email: initialValues.mail,
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
    } else {
      return (
        <RootStyle>
          <Header page="in-flight services" />
          <Banner />
          <Box style={{ height: "20vh" }}>Something wrong is happening.</Box>
          <Footer />
        </RootStyle>
      );
    }
  } else {
    return (
      <RootStyle>
        <Header page="in-flight services" />
        <Banner />
        <Box style={{ height: "20vh" }}>Something wrong is happening.</Box>
        <Footer />
      </RootStyle>
    );
  }
}
