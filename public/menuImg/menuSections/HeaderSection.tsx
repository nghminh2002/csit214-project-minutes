import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from '@mui/material'


export default function HeaderSection({nameFlight}:any){
    const RootStyle = styled(Grid)({
        margin:"auto",
        marginTop:"60px",
        marginLeft:"8.334%",
        marginBottom:"35px",
    })

    const Heading = styled(Box)({
        color: "#4669CD",
        fontSize:"32px",
        fontWeight:"600",
        fontFamily:"Inter",
        lineHeight:"120%",
        marginBottom:"16px",
    })
    
    const SubHeading = styled(Box)({
        color: "#000000",
        fontSize:"16px",
        fontWeight:"400",
        fontFamily:"Inter",
        lineHeight:"150%",
        fontStyle:"normal"
    })

    const NameFlight = styled(Typography)({
        display:"inline",
        fontSize:"16px",
        fontWeight:"500",
        color: "#4669CD",
    })

    return (
        <RootStyle xs={10}>
            <Heading>Food and drink</Heading>
            <SubHeading>Select your meal in <NameFlight>{nameFlight}</NameFlight></SubHeading>
        </RootStyle>
    )
}