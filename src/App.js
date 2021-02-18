import React from 'react';

import {Provider} from 'react-redux';
import store from './redux/reduxStore';

import {Grid, Container, makeStyles} from '@material-ui/core';

import OrderSectionContainer from './components/StepSection/OrderSectionContainer';
import InWorkSectionContainer from './components/StepSection/InWorkSectionContainer';
import InspectionSectionContainer from './components/StepSection/InspectionSectionContainer';
import CompleteSectionContainer from './components/StepSection/CompleteSectionContainer';


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
                <Grid container wrap='wrap' alignItems='flex-start' justify='center' spacing={4} className={classes.gridContainer}>
                    <OrderSectionContainer/>
                    <InWorkSectionContainer/>
                    <InspectionSectionContainer/>
                    <CompleteSectionContainer/>
                </Grid>
            </Container>
        </Provider>
    );
}

export default App;
