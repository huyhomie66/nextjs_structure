import { makeStyles } from "@material-ui/core/styles";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: "55vh",
    backgroundColor: theme.palette.darkGreen,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return <FrameContainer className={classes.frameContainer}></FrameContainer>;
};

export default AboutUs;
