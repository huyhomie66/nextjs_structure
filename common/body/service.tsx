import { makeStyles } from "@material-ui/core/styles";

import ServiceCard from "@/common/serviceCard";
import { serviceItems } from "@/constants";
// @ts-ignore
import FrameContainer from "@/theme/layout/frame.container";
import { cardScript } from "@/theme/animations/script";
import Typist from "react-typist";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: theme.heightSpace(7),
    backgroundColor: theme.palette.darkGreen,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  serviceRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    color: "white",
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
      <Typography variant="h5" className={classes.title}>
        <Typist >Our Service</Typist>
      </Typography>

      <div className={classes.serviceRow}>
        {serviceItems.map((e: any, i: number) => (
          <ServiceCard
            key={i}
            className={e?.frame?.targets}
            title={e.title}
            subTitle={e.subTitle}
            action={e.action}
          />
        ))}
      </div>
    </FrameContainer>
  );
}
