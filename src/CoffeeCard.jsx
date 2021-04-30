import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const CoffeeCard = (props) => {
  const classes = useStyles();

  const { avatarUrl, title, description, imageUrl, price } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent>
        <Typography
          variant="body2"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" size="small">
          Bye
        </Button>
        <Button color="primary" variant="outlined" size="small">
          Offer
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
