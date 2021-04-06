import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  frameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "50vh",
  },
});

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
