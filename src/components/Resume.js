import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const MainContainer = styled(Box)({
  background: "#233",
});

const TimeLine = styled(Box)(({ theme }) => ({
  // zIndex: 0, 
  position: "relative",
  padding: "1rem",
  margin: "0 auto",
  '&:before': {
    content: '""',
    position: "absolute",
    height: "100%",
    border: "1px solid tan",
    right: "40px",
    top: 0,
  },
  '&:after': {
    content: '""',
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    '&:before': {
      left: "calc(50% - 1px)",
      right: "auto",
    },
  },
}));

const TimeLineItem = styled(Box)(({ theme }) => ({
  padding: "1rem",
  borderBottom: "2px solid tan",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  '&:after': {
    content: '""',
    position: "absolute",
  },
  '&:before': {
    content: '""',
    position: "absolute",
    right: "-0.625rem",
    top: "calc(50% - 5px)",
    borderStyle: "solid",
    borderColor: "tomato tomato transparent transparent",
    borderWidth: "0.625rem",
    transform: "rotate(45deg)",
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    margin: "1rem",
    '&:nth-of-type(2n)': {
      float: "right",
      margin: "1rem",
      borderColor: "tan",
    },
    '&:nth-of-type(2n):before': {
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent tomato tomato",
    },
  },
}));

const TimeLineYear = styled(Typography)(({ theme }) => ({
  zIndex: 1, 
  clear: "both",
  textAlign: "center",
  maxWidth: "9.375rem",
  margin: "0 3rem 0 auto",
  fontSize: "1.8rem",
  color: "#dee0de",
  background: "#42b883",
  lineHeight: 1,
  padding: "0.5rem 1rem",
  '&:before': {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    margin: "0 auto",
    '&:nth-of-type(2n)': {
      float: "none",
      margin: "0 auto",
    },
    '&:nth-of-type(2n):before': {
      display: "none",
    },
  }
}));

const Heading = styled(Typography)({
  color: "#dee0de",
  padding: "3rem 0",
});

const SubHeading = styled(Typography)({
  color: "#dee0de",
  padding: 0,
});

const Body1 = styled(Typography)({
  color: "#42b883",
});

const Subtitle1 = styled(Typography)({
  color: "#dee0de",
});

const Resume = () => {
  return (
    <MainContainer component="header">
      <Heading variant="h4" align="center">
        Working Experience
      </Heading>
      <TimeLine component="div">
        <TimeLineYear variant="h2">Present</TimeLineYear>
        <TimeLineItem>
          <Box component="div">
            <SubHeading variant="h5" align="center">Software Developer</SubHeading>
            <Body1 variant="body1" align="center">Stack Team App (Melbourne, Australia)</Body1>
            <Subtitle1 variant="subtitle1" align="center">Led backend development using Ruby on Rails, and frontend development using Vue.js. Ensuring robust database design and efficient database queries, and emphasizing positive user experiences</Subtitle1>
          </Box>
        </TimeLineItem>

        <TimeLineYear variant="h2">2021</TimeLineYear>
        <TimeLineItem>
          <Box component="div">
            <SubHeading variant="h5" align="center">Production Coffee Roaster</SubHeading>
            <Body1 variant="body1" align="center">The Roasting Shed / Small Batch Roasting (London, The UK / Melbourne, Australia)</Body1>
            <Subtitle1 variant="subtitle1" align="center"></Subtitle1>
          </Box>
        </TimeLineItem>

        <TimeLineYear variant="h2">2017</TimeLineYear>
        <TimeLineItem>
          <Box component="div">
          <SubHeading variant="h5" align="center">Sales Development Representative</SubHeading>
            <Body1 variant="body1" align="center">Yuasa Trading (Fukuoka, Japan)</Body1>
            <Subtitle1 variant="subtitle1" align="center"></Subtitle1>
          </Box>
        </TimeLineItem>
        <TimeLineYear variant="h2">2012</TimeLineYear>
      </TimeLine>
    </MainContainer>
  );
};

export default Resume;
