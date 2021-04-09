import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { InView } from "react-intersection-observer";

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

const FrameContainer = ({
  children,
  className,
  style,
  onActiveView,
  ...props
}: {
  children?: any;
  className?: string;
  style?: any;
  onActiveView?: any;
}) => {
  const classes = useStyles();

  return (
    <InView
      as="div"
      onChange={onActiveView}
      className={clsx(classes.frameContainer, className)}
      style={style}
      {...props}
    >
      {children}
    </InView>
  );
};

export default FrameContainer;
