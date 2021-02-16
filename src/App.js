import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {Grid, Paper, Container, makeStyles} from '@material-ui/core';


const useStyle = makeStyles(() => ({
    root: {
        padding: 20,
        marginBottom: 10
    }
}));

const App = () => {
    const classes = useStyle();
    return (
        <Provider store={store}>
            <Container>
                <Grid container alignItems='center' justify='center' spacing={4}>
                    <Grid item>
                        <Paper className={classes.root}>CHECK</Paper>
                        <Paper>CHECK</Paper>
                    </Grid>

                    <Grid item>
                        <Paper>CHECK</Paper>
                        <Paper>CHECK</Paper>
                    </Grid>

                    <Grid item>
                        <Paper>CHECK</Paper>
                        <Paper>CHECK</Paper>
                    </Grid>

                    <Grid item>
                        <Paper>CHECK</Paper>
                        <Paper>CHECK</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Provider>
    );
}

export default App;
