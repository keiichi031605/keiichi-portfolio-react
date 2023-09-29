import React from "react";
import { styled } from '@mui/material/styles';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledBottomNavigation = styled(BottomNavigation)({
  background: '#222',
  height: '55px',
  overflow: 'hidden',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  '& .MuiSvgIcon-root': {
    fill: 'tan',
    '&:hover': {
      fill: 'tomato',
      fontSize: '1.8rem',
    },
  },
});

const Footer = () => {
  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction icon={<FacebookIcon />} />
      <StyledBottomNavigationAction icon={<TwitterIcon />} />
      <StyledBottomNavigationAction icon={<InstagramIcon />} />
    </StyledBottomNavigation>
  );
};

export default Footer;
