import HeaderSection from "../layout/menuSections/HeaderSection";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import Menu from "../layout/menuSections/Menu";
import NextStepBtn from "../components/NextStepBtn";
import Footer from "../components/Footer";

export default function Foodanddrink({ nameFlight = "KAP-3469"}) {

    const RootStyle = styled(Box)({
        display: "block",
        width: "100%",
        background: "#cccc"
    })

    const passengerInfor = [
        {
          name:"Milly Nguyen",
          phone:"09123456",
          email:"millynguyen@gmail.com",
          menuSelected:[],
        },
        {
          name:"Marry Nguyen",
          phone:"09123456",
          email:"marrynguyen@gmail.com",
          menuSelected:[],
        }
      ]


    return (
        <RootStyle>
            <HeaderSection nameFlight={nameFlight}/>
            <Menu passengerInfor = {passengerInfor}/>
            <NextStepBtn/>
            <Footer/>
        </RootStyle>
    )
}