import React from 'react';

import {Provider} from 'react-redux';
import store from './redux/reduxStore';

import {Grid, Container, makeStyles} from '@material-ui/core';

import StepSection from './components/StepSection';


const useStyle = makeStyles(() => ({
    gridContainer: {
        width: '100%',
    },
    container: {
        paddingTop: 40,
    }
}));

const App = () => {
    const classes = useStyle();
    return (
        <Provider store={store}>
            <Container className={classes.container}>
                <Grid container wrap alignItems='flex-start' justify='center' spacing={4} className={classes.gridContainer}>
                    <StepSection/>
                    <StepSection/>
                    <StepSection/>
                    <StepSection/>
                </Grid>
            </Container>
        </Provider>
    );
}

export default App;
