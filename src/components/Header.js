import React, { useEffect, useRef } from 'react';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from 'typed.js';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: theme.spacing(1),
}));

const StyledTypographyTitle = styled(Typography)({
  color: 'black',
});

const StyledTypographySubtitle = styled(Typography)({
  color: 'red',
  textTransform: 'uppercase',
});

const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '100vw',
  textAlign: 'center',
  zIndex: 1,
});

const Header = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleTyped = new Typed(titleRef.current, {
      strings: ["Keiichi Katsuno"],
      typeSpeed: 40
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: [
        "Ruby on Rails",
        "Vue.js",
        "React.js",
        "PostgreSQL",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    });

    return () => {
      titleTyped.destroy();
      subtitleTyped.destroy();
    };
  }, []);

  return (
    <StyledBox>
      <Grid container justifyContent="center">
        <StyledAvatar src={process.env.PUBLIC_URL + "/images/keiichi.png"} alt="Keiichi Katsuno" />
      </Grid>
      <StyledTypographyTitle variant="h4" ref={titleRef}></StyledTypographyTitle>
      <StyledTypographySubtitle variant="h5" ref={subtitleRef}></StyledTypographySubtitle>
    </StyledBox>
  );
};

export default Header;