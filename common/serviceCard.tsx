import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeCustom } from "@/interface";
import clsx from "clsx";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  root: {
    width: theme.withSpace(1.6),
  },
  cardActions: {
    alignItems: "center",
  },
}));

export default function ServiceCard({
  title,
  description,
  subTitle,
  action,
  className,
  isProduct,
}: {
  isProduct?: boolean;
  className?: any;
  title: string;
  subTitle?: string;
  description?: string;
  action?: any;
}) {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title={title} />
      <CardContent>{subTitle}</CardContent>
      {description && <CardContent>{description}</CardContent>}
      <CardActions className={classes.cardActions}>
        <Button onClick={action}> See more</Button>
      </CardActions>
    </Card>
  );
}
