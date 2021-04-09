import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import { earthScript } from "@/theme/animations/script";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme) => ({
  frameContainer: {
    marginTop: 100,
    height: "45vh",
  },
  textFrameContainer: {
    paddingTop: theme.spacing(10),
    width: "40vw",
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
        <Typist>
          {` Global JavaScript Company \n
           Building Perfect Application\n
           Strong OF Security\n
           Fast Development`}
        </Typist>
      </Typography>
    </div>
  );
};

const Home = () => {
  const classes = useStyles();
  return (
    <FrameContainer
      className={classes.frameContainer}
      onActiveView={(inView: any) => {
        inView && earthScript();
      }}
    >
      <TextFrame />
      <Earth />
    </FrameContainer>
  );
};

export default Home;
