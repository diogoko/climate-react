import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Card, CardContent, CardHeader, Container, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import SearchInput from './SearchInput';
import _ from 'lodash';

const styles = (theme) => ({
  temperature: {
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  main: {
    marginTop: '1em',
  }
});

class App extends React.Component {
  searchChange = _.debounce((event) => {
    console.log(`search ${event.target.value}`);
  }, 750)

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
  
        <Container maxWidth="sm" component="main" className={classes.main}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit">
                <GpsFixedIcon/>
              </IconButton>
  
              <SearchInput onChange={this.searchChange}/>
            </Toolbar>
          </AppBar>
  
          <Card>
            <CardHeader
              action={<RefreshIcon/>}
              subheader="Brazil"
              subheaderTypographyProps={{ align: 'center' }}
              title="São José do Rio Preto"
              titleTypographyProps={{ align: 'center' }}
            />
  
            <CardContent>
              <div className={classes.temperature}>
                <Typography component="h2" variant="h3" color="textPrimary">
                  22
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  ℃
                </Typography>
              </div>
  
              <ul>
                <Typography component="li" variant="subtitle1" align="left">
                  Clear
                </Typography>
                <Typography component="li" variant="subtitle1" align="left">
                  Feels like 21℃
                </Typography>
                <Typography component="li" variant="subtitle1" align="left">
                  Minimum 18℃
                </Typography>
                <Typography component="li" variant="subtitle1" align="left">
                  Maximum 32℃
                </Typography>
                <Typography component="li" variant="subtitle1" align="left">
                  Humidity 44%
                </Typography>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
