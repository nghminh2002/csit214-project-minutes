/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyle = styled(Grid)({
  margin: "60px 0px",
  padding: "60px 30px",
  border: "1px solid rgba(0,0,0,0.1)",
});

const StepContainer = styled(Grid)({
  display: "flex",
});

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StepName = styled(Typography)(({ isClicked }: isClickedType) => ({
  color: isClicked ? "rgba(70, 105, 205, 1)" : "rgba(177, 181, 195, 1)",
  fontSize: "clamp(1.25rem, 1.5rem, 2rem)",
  fontWeight: 700,
  padding: "0px 20px",
}));

const setTextColor = (pageName: string) => {
  if (typeof window !== "undefined") {
    const page = window.location.pathname;
    if (pageName === page) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const setImage = (pageName: string) => {
  if (typeof window !== "undefined") {
    const page = window.location.pathname;
    const passengerStatus = localStorage.getItem("passenger");
    const seatStatus = localStorage.getItem("seat");
    const foodStatus = localStorage.getItem("food-and-drink");
    switch (pageName) {
      case "/book-flight": {
        if (pageName === page) {
          return "./icon/FlightBookingClicked.svg";
        } else {
          return "./icon/Check.svg";
        }
      }
      case "/passenger": {
        if (pageName === page) {
          return "./icon/PassengerClicked.svg";
        } else {
          if (passengerStatus === "done") {
            return "./icon/Check.svg";
          } else {
            return "./icon/PassengerNotClicked.svg";
          }
        }
      }
      case "/seat": {
        if (pageName === page) {
          return "./icon/SeatClicked.svg";
        } else if (pageName !== page && seatStatus !== "done") {
          return "./icon/SeatNotClicked.svg";
        } else {
          return "./icon/Check.svg";
        }
      }
      case "/food-and-drink": {
        if (pageName === page) {
          return "./icon/FoodClicked.svg";
        } else if (pageName !== page && foodStatus !== "done") {
          return "./icon/FoodNotClicked.svg";
        } else {
          return "./icon/Check.svg";
        }
      }
      case "/payment": {
        if (pageName === page) {
          return "./icon/PaymentClicked.svg";
        } else {
          return "./icon/PaymentNotClicked.svg";
        }
      }
    }
  } else {
    return "";
  }
};

type isClickedType = {
  isClicked: boolean;
};

export function StepBar() {
  return (
    <RootStyle container>
      <StepContainer item xs={2.4}>
        <img src={setImage("/book-flight")} alt="" />
        <TextContainer>
          <StepName isClicked={setTextColor("/book-flight")}>
            Select Flight
          </StepName>
        </TextContainer>
      </StepContainer>
      <StepContainer item xs={2.4}>
        <img src={setImage("/passenger")} alt="" />
        <TextContainer>
          <StepName isClicked={setTextColor("/passenger")}>Passengers</StepName>
        </TextContainer>
      </StepContainer>
      <StepContainer item xs={2.4}>
        <img src={setImage("/seat")} alt="" />
        <TextContainer>
          <StepName isClicked={setTextColor("/seat")}>Seat Selection</StepName>
        </TextContainer>
      </StepContainer>
      <StepContainer item xs={2.4}>
        <img src={setImage("/food-and-drink")} alt="" />
        <TextContainer>
          <StepName isClicked={setTextColor("/food-and-drink")}>
            Food&Drink
          </StepName>
        </TextContainer>
      </StepContainer>
      <StepContainer item xs={2.4}>
        <img src={setImage("/payment")} alt="" />
        <TextContainer>
          <StepName isClicked={setTextColor("/payment")}>Payment</StepName>
        </TextContainer>
      </StepContainer>
    </RootStyle>
  );
}
