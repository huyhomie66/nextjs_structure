import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles({
  frameContainer: {},
});

const AboutUs = () => {
  const classes = useStyles();
  return <FrameContainer className={classes.frameContainer}></FrameContainer>;
};

export default AboutUs;
