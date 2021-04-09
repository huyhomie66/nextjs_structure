import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FrameContainer from "@/theme/layout/frame.container";

import ServiceCard from "@/common/serviceCard";
import { serviceItems } from "@/constants";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: "100vh",
    backgroundColor: theme.palette.darkGreen,
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Service() {
  const classes = useStyles();

  return (
    <FrameContainer className={classes.frameContainer}>
      {serviceItems.map((e: any, i: number) => (
        <ServiceCard
          key={i}
          frame={e.frame}
          title={e.title}
          subTitle={e.subTitle}
          action={e.action}
        />
      ))}
    </FrameContainer>
  );
}
