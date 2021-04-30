import React from "react";

// Components
import { Grid } from "@material-ui/core/";
import Header from "./Header";
import Content from "./Content";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container className={classes.content}>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
