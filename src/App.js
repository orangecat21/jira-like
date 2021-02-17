import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {Grid, Paper, Container, makeStyles, Card, IconButton} from '@material-ui/core';
import {Add as AddIcon, FiberManualRecord} from '@material-ui/icons';

import StepSectionHeader from './components/StepSection/StepSectionHeader';


const useStyle = makeStyles(() => ({
    sectionTitle: {
        marginBottom: 10,
    },
    circle: {
        height: '0.6em',
        width: '0.6em',
        color: 'blue',
    },
    title: {
        verticalAlign: 'bottom',
    },
    button: {
        color: 'black',
        padding: 0,
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
                <Grid container alignItems='center' justify='center' spacing={4}>
                    <Grid item>
                        {/*<Paper elevation={0} className={classes.root}>*/}
                        {/*    <FiberManualRecord className={classes.circle} />*/}
                        {/*    /!*<div className={classes.circle}/>*!/*/}
                        {/*    Заголовок*/}
                        {/*    <IconButton aria-label="add task" className={classes.button}>*/}
                        {/*        <AddIcon/>*/}
                        {/*    </IconButton>*/}
                        {/*</Paper>*/}

                        <StepSectionHeader title='Наряды' markerColor='grey' className={classes.sectionTitle}
                        addCardHandler={() => console.log('Карточка добавляется')} addButton/>

                        <Paper elevation={0} className={classes.root}>
                            <Card>SMTH</Card>
                            <Card>SMTH</Card>
                        </Paper>
                        <Paper>CHECK</Paper>
                    </Grid>

                    <Grid item>
                        <StepSectionHeader addButton title='Наряды' markerColor='grey' className={classes.sectionTitle}/>
                        <Paper elevation={0} className={classes.root}>
                            <Card>SMTH</Card>
                            <Card>SMTH</Card>
                        </Paper>
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
