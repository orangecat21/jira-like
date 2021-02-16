import React from 'react';
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
    );
}

export default App;
