import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Container, IconButton, Toolbar, withStyles } from '@material-ui/core';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import SearchInput from './SearchInput';
import WeatherCard from './WeatherCard';
import _ from 'lodash';
import { weatherByName } from './openWeather';

const styles = (theme) => ({
  main: {
    marginTop: '1em',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }

  searchChange = _.debounce((event) => {
    const name = event.target.value.trim();
    if (name === '') {
      return;
    }

    weatherByName(name).then((weather) => {
      this.setState({ weather });
    });
  }, 1000)

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
  
          {this.state.weather !== null ? <WeatherCard weather={this.state.weather}/> : null}
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
