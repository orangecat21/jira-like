import React from 'react';

import {Grid, makeStyles} from '@material-ui/core';

import StepSectionHeader from './StepSectionHeader';
import TaskList from './TaskList';

const useStyle = makeStyles({
    sectionTitle: {
        marginBottom: 10,
    },
    root: {
        flexGrow: 1,
        flexBasis: 250,
    }
});

const StepSection = (
    {
        header,
        headerMarkerColor,
        addCardHandler,
        addButton,
        tasks,
        ...props
    }) => {

    const classes = useStyle();
    return (
        <Grid item className={classes.root}>
            <StepSectionHeader
                title={header}
                markerColor={headerMarkerColor}
                addCardHandler={addCardHandler}
                addButton={addButton}
                className={classes.sectionTitle}
            />

            <TaskList tasks={tasks}/>
        </Grid>
    );
};

export default StepSection;