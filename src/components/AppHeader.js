import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <AppBar position={"sticky"} color={"default"}>
      <Toolbar>
        <Typography color={"inherit"} component={Link} to={"/"} variant={"h5"}>
          hide forum
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
