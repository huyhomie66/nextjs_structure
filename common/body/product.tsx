import { makeStyles } from "@material-ui/core/styles";
import FrameContainer from "@/theme/layout/frame.container";
import ServiceCard from "@/common/serviceCard";
import { productItems } from "@/constants";
import { useEffect } from "react";
import cardScript from "@/theme/animations/script/card";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: "100vh",
    backgroundColor: theme.palette.darkGreen,
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Product() {
  const classes = useStyles();
  useEffect(() => {
    Promise.all(
      productItems.map((e: any) => {
        const { translateX, duration, targets } = e.frame;
        // @ts-ignore
        cardScript({
          translateX,
          duration,
          targets: `.${targets}`,
        });
      })
    );
  }, []);

  return (
    <FrameContainer className={classes.frameContainer}>
      {productItems.map((e: any, i: number) => (
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
