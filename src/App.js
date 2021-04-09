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
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        name: 'São José do Rio Preto',
        main: {
          temp: 22,
          feels_like: 21,
          temp_min: 18,
          temp_max: 32,
          humidity: 44,
        },
        weather: [
          {
            main: 'Clear'
          }
        ],
        sys: {
          country: 'BR'
        }
      }
    };
  }

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
  
          <WeatherCard weather={this.state.weather}/>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
