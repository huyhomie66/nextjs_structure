import { makeStyles } from "@material-ui/core/styles";
import FrameContainer from "@/theme/layout/frame.container";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    backgroundColor: theme.palette.darkBlue,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return <FrameContainer className={classes.frameContainer}></FrameContainer>;
};

export default AboutUs;
