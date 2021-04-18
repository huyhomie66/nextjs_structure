import { makeStyles } from "@material-ui/core/styles";

import ServiceCard from "@/common/serviceCard";
import { serviceItems } from "@/constants";
// @ts-ignore
import FrameContainer from "@/theme/layout/frame.container";
import { cardScript } from "@/theme/animations/script";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: theme.heightSpace(6),
    backgroundColor: theme.palette.darkGreen,
    display: "flex",
    justifyContent: "space-around",
  alignItems:"center"
  },
}));

export default function Service() {
  const classes = useStyles();

  return (
    <FrameContainer
      className={classes.frameContainer}
      onActiveView={(inView: any) => {
        inView && cardScript();
      }}
    >
      {serviceItems.map((e: any, i: number) => (
        <ServiceCard
          key={i}
          className={e?.frame?.targets}
          title={e.title}
          subTitle={e.subTitle}
          action={e.action}
        />
      ))}
    </FrameContainer>
  );
}
