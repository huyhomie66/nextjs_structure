import React, { useState } from "react";
import { Link } from "react-scroll";

import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";

import { useStyles } from "@/common/header/styles";
import NavbarDrawer from "@/common/header/drawer";
import { navbarItems } from "@/constants";

const NavBarTitle = () => {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const onSetActive = (e: any) => {
    console.info(e);
    setActive(e);
  };
  return (
    <Hidden xsDown>
      {navbarItems.map((item: any, index: number) => {
        const className = active === index ? classes.active : classes.deActive;
        return (
          <Link
            key={index}
            to={item.title}
            spy={true}
            smooth={true}
            duration={200}
            style={{ padding: 10, cursor: "pointer" }}
            className={className}
            onClick={() => onSetActive(index)}
            containerId="navbar"
          >
            {item.title}
          </Link>
        );
      })}
    </Hidden>
  );
};

const MenuIconMobile = ({
  handleDrawerOpen,
  open,
}: {
  handleDrawerOpen: any;
  open: any;
}) => {
  const classes = useStyles();

  return (
    <Hidden smUp>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={clsx(open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );
};

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            Persistent
          </Typography>
          <NavBarTitle />
          <MenuIconMobile handleDrawerOpen={handleDrawerOpen} open={open} />
        </Toolbar>
      </AppBar>
      <NavbarDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </div>
  );
};

export default Navbar;
