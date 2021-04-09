import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Container, IconButton, Toolbar, withStyles } from '@material-ui/core';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import SearchInput from './SearchInput';
import WeatherCard from './WeatherCard';
import _ from 'lodash';

const styles = (theme) => ({
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
  
          <WeatherCard/>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
