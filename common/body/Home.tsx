import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

import Earth from "@/theme/animations/component/earth";
import { earthScript } from "@/theme/animations/script";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    marginTop: theme.spacing(20),
    height: theme.heightSpace(6),
  },
  textFrameContainer: {
    paddingTop: theme.spacing(10),
    width: theme.withSpace(4),
  },
  textFrame: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    flex: 1,
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
      <Earth />
    </FrameContainer>
  );
};

export default Home;
