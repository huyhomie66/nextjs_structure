import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme) => ({
  frameContainer: {
    marginTop: 100,
    height: "45vh",
  },
  textFrameContainer: {
    paddingTop: theme.spacing(10),
    width: "30vw",
  },
  textFrame: {
    fontWeight: "bold",
  },
}));

const TextFrame = () => {
  const classes = useStyles();

  return (
    <div className={classes.textFrameContainer}>
      <Typography variant="h3" className={classes.textFrame}>
        <Typist>We are big Service of Security</Typist>
      </Typography>
    </div>
  );
};

const Home = () => {
  const classes = useStyles();
  return (
    <FrameContainer className={classes.frameContainer}>
      <TextFrame />
      <Earth />
    </FrameContainer>
  );
};

export default Home;
