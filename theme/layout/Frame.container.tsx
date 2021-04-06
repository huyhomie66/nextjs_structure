import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50vh",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

const FrameContainer = ({ children, className, style, ...props }: any) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.frameContainer, className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default FrameContainer;
