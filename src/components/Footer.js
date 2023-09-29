import React from "react";
import { styled } from '@mui/material/styles';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledBottomNavigation = styled(BottomNavigation)({
  background: '#222',
  height: '55px',
  overflow: 'hidden',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  '& .MuiSvgIcon-root': {
    fill: '#dee0de',
    '&:hover': {
      fill: '#dee0de',
      fontSize: '1.8rem',
    },
  },
});

const Footer = () => {
  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction
        component="a"
        href="https://www.linkedin.com/in/keiichi-katsuno/" 
        icon={<LinkedInIcon />}
        target="_blank" 
        rel="noopener noreferrer"
      />
      <StyledBottomNavigationAction
        component="a"
        href="https://github.com/keiichi031605"
        icon={<GitHubIcon />}
        target="_blank" 
        rel="noopener noreferrer"
      />
    </StyledBottomNavigation>
  );
};

export default Footer;
