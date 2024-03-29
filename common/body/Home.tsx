import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import { earthScript } from "@/theme/animations/script";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: theme.heightSpace(6),
    display: "flex",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  textFrameContainer: {
    width: theme.withSpace(4),


  },
  textFrame: {
    height: theme.heightSpace(3),
    fontWeight: "bold",
    display: "flex",
  },
  colStack: {
    marginTop: theme.heightSpace(1),
  },
  earth: {
  },
}));

const TextFrame = () => {
  const classes = useStyles();

  return (
    <div className={classes.textFrameContainer}>
      <Typography variant="h3" className={classes.textFrame}>
        <Typist
          className="TypistExample-message"
          cursor={{ hideWhenDone: true }}
        >
          . Global JavaScript Company
          <Typist.Delay ms={500} />
          <br />
          . Building Perfect Application
          <Typist.Delay ms={400} />
          <br />
          . Strong Of Security
          <Typist.Delay ms={300} />
          <br />
          . Fast Development
          <Typist.Delay ms={100} />
          <br />
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
      <Earth className={classes.earth} />
    </FrameContainer>
  );
};

export default Home;
