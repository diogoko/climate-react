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

function WeatherCard() {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                action={<RefreshIcon />}
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
    );
}

export default WeatherCard;
