import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const images = require.context("../../build/static/media/", true, /\.JPG$/);
const imagesArray = images.keys();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
const onPicClick = (e) => {
  console.log(e.target.src);

  // return (
  //   <div
  //     style={{
  //       zIndex: "5",
  //       width: "700px",
  //       height: "500px",
  //       display: "inline",
  //     }}
  //   >
  //     {e.target}
  //   </div>
  // );
};
export default function Slider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {imagesArray.map((image, id) => (
          <GridListTile key={id} style={{ height: "175px", width: "auto" }}>
            <img
              src={`static/media${image.replace("./", "/")}`}
              alt={image.url}
              key={id}
              style={{ width: "100%", height: "100%" }}
              onClick={(e) => onPicClick(e)}
            />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
