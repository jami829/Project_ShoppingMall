import React from 'react';
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Header from './components/Header';




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


function App() {

  return (
    // </ThemeProvider> 는 항상 리액트의 컨택스트 API를 의존하기 때문에 스타일링하는 컴포넌트들의 상위에 항상 위치하도록 하여야 한다.
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
