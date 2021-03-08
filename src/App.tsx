import React from 'react';
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);



function App() {
  const classes = useStyles();
  return (
    // </ThemeProvider> 는 항상 리액트의 컨택스트 API를 의존하기 때문에 스타일링하는 컴포넌트들의 상위에 항상 위치하도록 하여야 한다.
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Photos
        </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
