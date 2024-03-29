import React, { useEffect, useRef, useState } from 'react';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from 'typed.js';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
}));

const CursorContainer = styled(Box)({
  position: 'relative',
  '& .typed-cursor': {
    position: 'absolute',
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
  },
  margin: '12px'
});

const StyledTypographyTitle = styled(Typography)({
  color: '#dee0de',
});

const StyledTypographySubtitle = styled(Typography)({
  color: '#dee0de',
});

const StyledBox = styled(Box)({
  padding: '150px',
  position: 'relative',
  width: '100vw',
  textAlign: 'center',
  zIndex: -1,
  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.png"})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
});

const Header = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [subtitleColor, setSubtitleColor] = useState('red');

  useEffect(() => {
    const titleTyped = new Typed(titleRef.current, {
      strings: ["Keiichi Katsuno"],
      typeSpeed: 40
    });

    const subtitleStrings = [
      "A full-stack developer",
      "Specializing in...",
      "Ruby on Rails",
      "Vue.js",
      "React.js"
    ];

    const subtitleColors = [
      '#dee0de',
      '#dee0de',
      '#cc0000',
      '#42b883',
      '#61dbfb',
    ];

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: subtitleStrings,
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      preStringTyped: (stringIndex) => {
        setSubtitleColor(subtitleColors[stringIndex % subtitleColors.length]);
      }
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
      <CursorContainer>
        <StyledTypographyTitle variant="h4" ref={titleRef}></StyledTypographyTitle>
      </CursorContainer>
      <CursorContainer>
        <StyledTypographySubtitle 
          variant="h5" 
          ref={subtitleRef} 
          style={{ color: subtitleColor }}
        ></StyledTypographySubtitle>
      </CursorContainer>
    </StyledBox>
  );
};

export default Header;