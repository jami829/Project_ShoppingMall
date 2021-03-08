import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Header from './components/Header';

import { Switch } from '@material-ui/core';



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

  // 다크모드  
  const [isDark, setIsDark] = useState(false)

  // const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
  };

  console.log("isDark", isDark)
  return (
    // </ThemeProvider> 는 항상 리액트의 컨택스트 API를 의존하기 때문에 스타일링하는 컴포넌트들의 상위에 항상 위치하도록 하여야 한다.
    <ThemeProvider theme={theme}>
      <Header>
        {/* Header 안 쪽에 children의 특수한 prop형태로 내려주게 될 것 */}
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Header>
    </ThemeProvider>
  );
}

export default App;
