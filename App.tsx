import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Groups } from '@screens/Groups';





export default function App() {
  return (
    
    /* aqui centraliza toda tema do aplicativo*/
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
    
  );
}


