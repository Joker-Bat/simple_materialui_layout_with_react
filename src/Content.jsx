import { Grid } from "@material-ui/core";
import React from "react";

// data
import contentList from "./constants";

// Components
import CoffeeCard from "./CoffeeCard";


const Content = () => {
  return (
    <Grid container spacing={4} alignItems="flex-start">
      {contentList.map((item, index) => {
        return (
          <Grid key={index + 'card'} item xs={12} sm={6} md={4}>
            <CoffeeCard {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
