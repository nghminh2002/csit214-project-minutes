/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { seat_data } from "../data/seat_data";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "next/router";
import { StepBar } from "../components/StepBar";

const BackGround = styled(Box)({
  backgroundColor: "rgb(244,245,246)",
  width: "auto",
  height: "auto",
  color: "black",
  maxWidth: "100vw",
  padding: "8%",
});

const Container = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  padding: "6% 3% 3% 6%",
  borderRadius: "12px",
  margin: "6% 0%",
});

const SeatContainer = styled(Box)({
  backgroundColor: "#F4F5F6",
  width: "100%",
  height: "100%",
  borderRadius: "4px",
});

const SeatHeading = styled(Box)({
  color: "#4669CD",
  fontSize: "32px",
  fontWeight: "600",
  padding: "15px 0px",
});

const SubHeading = styled(Typography)({
  color: "#000000",
  fontWeight: "400",
  fontSize: "16px",
});

const BlueSubHeading = styled(Typography)({
  color: "#4669CD",
  fontWeight: "600",
  fontSize: "16px",
  paddingLeft: "0.7%",
});

const InfoText = styled(Box)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#1A1D1F",
});

const UpperBox = styled(Box)({
  borderBottom: "1px solid #E6E8EC",
  padding: "20px 0 20px 5px",
  margin: "0 140px 0 5px",
});

const LowerInfoText = styled(Box)({
  color: "#1A1D1F",
  fontSize: "20px",
  fontWeight: "600",
  paddingBottom: "50px",
  paddingTop: "7px",
});

const ContainerHeading = styled(Box)({
  color: "#1A1D1F",
  fontSize: "clamp(1px, 24px, 24px)",
  fontWeight: "600",
  paddingBottom: "20px",
  padding: "5px 7px 0 0",
});

const YourSelectedBox = styled(Box)({
  display: "flex",
  marginTop: "5%",
});

const SeatSelectedText = styled(Typography)({
  color: "#4669CD",
  fontSize: "30px",
  fontWeight: "600",
});

const SeatIcons = styled(Box)<{
  page: {
    NotAvailableIcon: boolean;
    CanChooseIcon: boolean;
    YourSelectedIcon: boolean;
  };
}>(({ page }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  ...(page.NotAvailableIcon && {
    backgroundColor: "#B1B5C3",
  }),
  ...(page.CanChooseIcon && {
    backgroundColor: "#4669CD",
  }),
  ...(page.YourSelectedIcon && {
    backgroundColor: "#22BF61",
  }),
}));

const CenterIcon = styled(Box)({
  padding: "12px 0 0 18px",
});

const SeatSelections = styled("button")<{
  page: {
    SeatUnvailable: boolean;
    SeatCanChoose: boolean;
    SeatSelected: boolean;
  };
}>(({ page }) => ({
  width: "3.5rem",
  height: "3.5rem",
  borderRadius: "4px",
  border: "none",
  marginBottom: "0.8em",
  ...(page.SeatUnvailable && {
    backgroundColor: "#B1B5C3",
  }),
  ...(page.SeatCanChoose && {
    backgroundColor: "#4669CD",
  }),
  ...(page.SeatSelected && {
    backgroundColor: "#22BF61",
  }),
}));

const SeatGrid = styled(Grid)({
  padding: "4% 0 0 15%",
});

const SeatRow = styled(Box)({
  margin: "0 25px 40px 25px",
  color: "#B1B5C3",
  fontWeight: "600",
  fontSize: "20px",
});

const SeatColumn = styled(Grid)({
  color: "#070A14",
  fontWeight: "600",
  fontSize: "20px",
  padding: "20% 0 15px 20px",
});

const FlexBox = styled(Box)({
  display: "flex",
});

const Banner = styled(Box)({
  backgroundImage: "url(/BookFlightBanner.svg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backdropFilter: "blur(2px)",
  height: "700px",
  position: "relative",
});

function Seat() {
  const [data, setData] = useState(seat_data);
  const [selectedSeatArray, setSelectedSeatArray] = useState([] as string[]);

  const handleSeat = (id: any, status: any, name: any, column: any) => {
    const selectedSeatIncluded = selectedSeatArray.includes(name);
    if (!selectedSeatIncluded) {
      setSelectedSeatArray(selectedSeatArray.concat(name));
    }
  };

  useEffect(() => {
    if (selectedSeatArray.length > 1) {
      setSelectedSeatArray(selectedSeatArray.splice(1, 1));
    }

    selectedSeatArray.map((seatName) => {
      const newData = [...data];
      const index = newData.findIndex(
        (seat: { name: any }) => seat.name === seatName
      );
      if (newData[index].status === 1) {
        newData[index] = { ...newData[index], status: 2 };
        setData(newData);
      } else {
        setData(seat_data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSeatArray]);

  let flightCode;
  if (typeof window !== "undefined") {
    flightCode = localStorage.getItem("flightNumber");
  } else {
    flightCode = 1;
  }

  const generateForm = () => {
    if (typeof window !== "undefined") {
      const list = [];
      const numberOfPassenger = localStorage.getItem("number-of-people");
      if (numberOfPassenger != undefined || numberOfPassenger != null) {
        for (let i = 0; i < parseInt(numberOfPassenger); i++) {
          list.push(i);
        }
        return list.map((i) => (
          <Container key={`item-${i}`}>
            <Grid container>
              <Grid item md={4.3} xs={12}>
                <UpperBox>
                  <ContainerHeading>Passenger {i + 1}</ContainerHeading>
                  <InfoText>Full name : </InfoText>
                  <InfoText>Phone Number : </InfoText>
                  <InfoText>Gmail : </InfoText>
                </UpperBox>
                <YourSelectedBox marginBottom={{ xs: "10%", md: "60%" }}>
                  <ContainerHeading>Your Selected : </ContainerHeading>
                  {selectedSeatArray.map((selectedSeat, index) => (
                    <SeatSelectedText key={index}>
                      {selectedSeat}
                    </SeatSelectedText>
                  ))}
                </YourSelectedBox>
                <Box>
                  <Grid container>
                    <Grid item xs={2}>
                      <SeatIcons
                        page={{
                          NotAvailableIcon: true,
                          CanChooseIcon: false,
                          YourSelectedIcon: false,
                        }}
                      >
                        <CenterIcon>
                          <img src={"../seatImg/close.svg"} alt="close" />
                        </CenterIcon>
                      </SeatIcons>
                    </Grid>
                    <Grid>
                      <LowerInfoText>Not Available</LowerInfoText>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={2}>
                      <SeatIcons
                        page={{
                          NotAvailableIcon: false,
                          CanChooseIcon: true,
                          YourSelectedIcon: false,
                        }}
                      >
                        <CenterIcon>
                          <img src={"../seatImg/SmallPerson.png"} alt="close" />
                        </CenterIcon>
                      </SeatIcons>
                    </Grid>
                    <Grid>
                      <LowerInfoText>Can Choose</LowerInfoText>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={2}>
                      <SeatIcons
                        page={{
                          NotAvailableIcon: false,
                          CanChooseIcon: false,
                          YourSelectedIcon: true,
                        }}
                      >
                        <CenterIcon>
                          <img src={"../seatImg/SmallPerson.png"} alt="close" />
                        </CenterIcon>
                      </SeatIcons>
                    </Grid>
                    <Grid>
                      <LowerInfoText>Your Selected</LowerInfoText>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={7.7} xs={12}>
                <SeatContainer>
                  <SeatGrid container spacing={1}>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                    >
                      <SeatColumn item>A</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "A")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="col_B"
                    >
                      <SeatColumn>B</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "B")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="col_C"
                    >
                      <SeatColumn>C</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "C")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={0}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="row"
                    >
                      <SeatRow style={{ marginTop: "75px" }}>1</SeatRow>
                      <SeatRow>2</SeatRow>
                      <SeatRow>3</SeatRow>
                      <SeatRow>4</SeatRow>
                      <SeatRow>5</SeatRow>
                      <SeatRow>6</SeatRow>
                      <SeatRow>7</SeatRow>
                      <SeatRow>8</SeatRow>
                      <SeatRow>9</SeatRow>
                      <SeatRow>10</SeatRow>
                    </Grid>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="col_D"
                    >
                      <SeatColumn>D</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "D")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="col_E"
                    >
                      <SeatColumn>E</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "E")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={2.7}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      marginRight={{ xl: "4%" }}
                      className="col_F"
                    >
                      <SeatColumn>F</SeatColumn>
                      {data
                        .filter((el: { column: string }) => el.column === "F")
                        .map(
                          (
                            seat: {
                              id: any;
                              status: any;
                              name: any;
                              column: any;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { id, status, name, column } = seat;
                            switch (status) {
                              case 0:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: true,
                                      SeatCanChoose: false,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    disabled
                                  >
                                    <img
                                      src={"../seatImg/close.svg"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 1:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: true,
                                      SeatSelected: false,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                              case 2:
                                return (
                                  <SeatSelections
                                    page={{
                                      SeatUnvailable: false,
                                      SeatCanChoose: false,
                                      SeatSelected: true,
                                    }}
                                    key={index}
                                    value={name}
                                    onClick={() => {
                                      handleSeat(id, status, name, column);
                                    }}
                                  >
                                    <img
                                      src={"../seatImg/BigPerson.png"}
                                      alt="close"
                                    />
                                  </SeatSelections>
                                );
                            }
                          }
                        )}
                    </Grid>
                    <Grid
                      item
                      xs={0}
                      sm={1.5}
                      md={1.5}
                      lg={1.5}
                      xl={1}
                      display={{ md: "none", xs: "block" }}
                    >
                      <SeatRow style={{ marginTop: "75px" }}>1</SeatRow>
                      <SeatRow>2</SeatRow>
                      <SeatRow>3</SeatRow>
                      <SeatRow>4</SeatRow>
                      <SeatRow>5</SeatRow>
                      <SeatRow>6</SeatRow>
                      <SeatRow>7</SeatRow>
                      <SeatRow>8</SeatRow>
                      <SeatRow>9</SeatRow>
                      <SeatRow>10</SeatRow>
                    </Grid>
                  </SeatGrid>
                </SeatContainer>
              </Grid>
            </Grid>
          </Container>
        ));
      }
    }
  };

  const handleClick = () => {
    localStorage.setItem("seat", "done");
    Router.push("/food-and-drink");
  };

  return (
    <Grid sx={{ backgroundColor: "rgb(244,245,246)" }}>
      <Header page={"BookFlight"} />
      <Banner />
      <StepBar />
      <BackGround>
        <Box>
          <SeatHeading>Seat Selection</SeatHeading>
          <FlexBox>
            <SubHeading>Select your seat at</SubHeading>
            <BlueSubHeading>{flightCode}</BlueSubHeading>
          </FlexBox>
        </Box>
        <Box>{generateForm()}</Box>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => handleClick()}>
            Next Step
          </Button>
        </Box>
      </BackGround>
      <Footer />
    </Grid>
  );
}

export default Seat;
