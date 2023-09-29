import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";
import { styled } from '@mui/material/styles';

import Footer from "../components/Footer";

const StyledAppBar = styled(AppBar)({
  background: "#222",
  margin: 0,
});

const StyledIconButton = styled(IconButton)({
  color: "tomato",
});

const StyledTypography = styled(Typography)({
  color: "tan",
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  display: "block",
  margin: "0.5rem auto",
  width: theme.spacing(13),
  height: theme.spacing(13),
}));

const StyledListItem = styled(ListItem)({
  color: "tan",
});

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = () => (
    <Box component="div" sx={{ width: 250, background: "#511", height: "100%" }}>
      <StyledAvatar src={process.env.PUBLIC_URL + "/images/keiichi.png"} alt="Keiichi Katsuno" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <StyledListItem
            button
            key={i}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon>{item.listIcon}</ListItemIcon>
            <ListItemText primary={item.listText} />
          </StyledListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <StyledAppBar position="static">
          <Toolbar>
            <StyledIconButton onClick={() => setOpen(true)}>
              <ArrowBack />
            </StyledIconButton>
            <StyledTypography variant="h5">
              Portfolio
            </StyledTypography>
          </Toolbar>
        </StyledAppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
