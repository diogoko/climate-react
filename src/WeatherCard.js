import RefreshIcon from '@material-ui/icons/Refresh';
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    temperature: {
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
    }
}));

function WeatherCard(props) {
    const classes = useStyles();
    const weather = props.weather;

    return (
        <Card>
            <CardHeader
                action={<RefreshIcon />}
                subheader={weather.sys.country}
                subheaderTypographyProps={{ align: 'center' }}
                title={weather.name}
                titleTypographyProps={{ align: 'center' }}
            />

            <CardContent>
                <div className={classes.temperature}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                        {weather.main.temp}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        ℃
                    </Typography>
                </div>

                <ul>
                    <Typography component="li" variant="subtitle1" align="left">
                        {weather.weather[0].main}
                    </Typography>
                    <Typography component="li" variant="subtitle1" align="left">
                        Feels like {weather.main.feels_like}℃
                    </Typography>
                    <Typography component="li" variant="subtitle1" align="left">
                        Minimum {weather.main.temp_min}℃
                    </Typography>
                    <Typography component="li" variant="subtitle1" align="left">
                        Maximum {weather.main.temp_max}℃
                    </Typography>
                    <Typography component="li" variant="subtitle1" align="left">
                        Humidity {weather.main.humidity}%
                    </Typography>
                </ul>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;
