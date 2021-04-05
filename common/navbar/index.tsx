import React, { useState } from "react";
import { Link } from "react-scroll";
import { navbarItems } from "@/constants";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./styles";
import NavbarDrawer from "./drawer";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [active, setActive] = useState();

  const onSetActive = (e: any) => {
    setActive(e);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography>
          {navbarItems.map((item: any, index: number) => {
            const className =
              active === item.title ? "nav-link-active" : "nav-link";
            return (
              <Link
                key={index}
                className={className}
                to={item.title}
                spy={true}
                smooth={true}
                duration={200}
                onSetActive={() => onSetActive(item.title)}
                containerId="navbar"
              >
                <Typography>{item.title}</Typography>
              </Link>
            );
          })}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavbarDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </div>
  );
};

export default Navbar;
