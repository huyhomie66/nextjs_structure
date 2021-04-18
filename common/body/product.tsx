import { makeStyles } from "@material-ui/core/styles";
import FrameContainer from "@/theme/layout/frame.container";
import ProductCard from "@/common/productCard";
import { productItems } from "@/constants";
import { useEffect } from "react";
import cardScript from "@/theme/animations/script/card";

const useStyles = makeStyles((theme: any) => ({
  frameContainer: {
    height: theme.heightSpace(8),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card : { 
    backgroundColor: theme.palette.darkBlue,
  }
}));

export default function Product() {
  const classes = useStyles();
  useEffect(() => {
    // Promise.all(
    //   productItems.map((e: any) => {
    //     const { translateX, duration, targets } = e.frame;
    //     // @ts-ignore
    //     cardScript({
    //       translateX,
    //       duration,
    //       targets: `.${targets}`,
    //     });
    //   })
    // );
  }, []);

  //   <ReactCSSTransitionGroup
  //   transitionName="example"
  //   transitionEnterTimeout={500}
  //   transitionLeaveTimeout={300}>
  //   {items}
  // </ReactCSSTransitionGroup>

  return (
    <FrameContainer className={classes.frameContainer}>
      {productItems.map((e: any, i: number) => (
        <ProductCard key={i} title={e.title} className={classes.card} />
      ))}
    </FrameContainer>
  );
}
