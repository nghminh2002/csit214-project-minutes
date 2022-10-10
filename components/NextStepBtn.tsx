import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function NextStepBtn() {
    const RootStyle = styled(Box)({
        margin:"auto",
        display: "flex",
        width: "83.334%",
        justifyContent: "end",
        paddingBottom:"133px",
    })

    const BootstrapButton = styled(Button)({
        width: "138px",
        color: "white",
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontWeight: "500",
        fontFamily: "Inter",
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });
    return (
        <RootStyle>
            <BootstrapButton>
                Next step
            </BootstrapButton>
        </RootStyle>
    )
}