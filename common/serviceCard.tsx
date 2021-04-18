import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";

import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(20),
    width: "20vw",
    height: "35vh",
  },
  cardActions: {
    display: "flex",
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
    <Card className={clsx(classes.root,className)}>
      <CardHeader title={title}  />
      <CardContent>{subTitle}</CardContent>
      {description && <CardContent>{description}</CardContent>}
      <CardActions className={classes.cardActions}>
        <Button onClick={action}> {isProduct ? "Get Demo" : "See more"}</Button>
      </CardActions>
    </Card>
  );
}
