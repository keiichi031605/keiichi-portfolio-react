import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import project1 from "../images/html-css-javascript-lg.jpg";
// import project2 from "../images/html-css-javascript.jpg";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const MainContainer = styled(Box)(({ theme }) => ({
  background: "#233",
  height: "100%",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "3rem auto",
}));

const projects = [
  //... (unchanged)
];

const ProjectCard = ({ name, description, image }) => {
  return (
    <Grid item xs={12} sm={8} md={4}>
      <StyledCard>
        <CardActionArea>
          <CardMedia component="img" alt={name} height="140" image={image} />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

const Portfolio = () => {
  return (
    <MainContainer>
      <Grid container justifyContent="center">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Portfolio;
