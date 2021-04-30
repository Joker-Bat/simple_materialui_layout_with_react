import React from "react";

// Material UI
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles(() => ({
  header: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.header}>This is header</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
