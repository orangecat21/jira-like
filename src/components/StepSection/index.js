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
        tasks,
        moveLeft,
        moveRight,
        cardClickHandler,
        ...props
    }) => {

    const classes = useStyle();
    return (
        <Grid item className={classes.root} {...props}>
            <StepSectionHeader
                title={header}
                markerColor={headerMarkerColor}
                addCardHandler={addCardHandler}
                addButton={addCardHandler && true}
                className={classes.sectionTitle}
            />

            <TaskList tasks={tasks} moveLeft={moveLeft} moveRight={moveRight} cardClickHandler={cardClickHandler}/>
        </Grid>
    );
};

export default StepSection;