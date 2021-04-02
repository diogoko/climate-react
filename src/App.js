import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Card, CardContent, CardHeader, Container, fade, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

const useStyles = makeStyles((theme) => ({
  temperature: {
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  main: {
    marginTop: '1em',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>

      <Container maxWidth="sm" component="main" className={classes.main}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <GpsFixedIcon/>
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
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

export default App;
