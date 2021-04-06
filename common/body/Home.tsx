import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles({
  frameContainer: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  earth: {
    height: "100vh",
  },
  textFrameContainer: {
    width: "30vw",
  },
  textFrame: {
    fontWeight: "bold",
  },
});

const TextFrame = () => {
  const classes = useStyles();

  return (
    <div className={classes.textFrameContainer}>
      <Typography variant="h4" className={classes.textFrame}>
        <Typist>
          We are big Service of building Security Web and Application
        </Typist>
      </Typography>
    </div>
  );
};

const AboutUs = () => {
  const classes = useStyles();
  return (
    <FrameContainer className={classes.frameContainer}>
      <TextFrame />
      <Earth className={classes.earth} />
    </FrameContainer>
  );
};

export default AboutUs;