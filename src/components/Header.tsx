import React, { useState } from 'react';

import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useReactiveVar } from '@apollo/client';
import { cartItemVar } from '../cache';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props) {
  // 장바구니 수 변경한 Reactive Variables, 변경 될 때마다 이벤트을 받아 리렌더링을 해야함
  // 변경이 될 때마다 리렌더링이 되어 아래 cartItems에는 항상 최신 값이 받아오게 됨
  const cartItems = useReactiveVar(cartItemVar)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {children}
          {/* <Button color="inherit">Login</Button> */}
          <IconButton>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header;