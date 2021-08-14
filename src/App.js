import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from 'Theme';
import Home from 'Home';
import Layout from 'Layout';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Layout>
          <Home />
        </Layout>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
