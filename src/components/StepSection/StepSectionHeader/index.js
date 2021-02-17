import React from 'react';

import {makeStyles, Paper, IconButton} from '@material-ui/core';
import {FiberManualRecord, Add as AddIcon} from '@material-ui/icons';

const useStyle = makeStyles({
    root: {
        padding: 10,
        backgroundColor: '#F2F4F5',
        display: 'flex',
        alignItems: 'center',
        minWidth: 250,
        minHeight: 44,
    },
    marker: {
        width: '0.6em',
        height: '0.6em',
        color: props => props.markerColor,
        marginRight: 5,
    },
    button: {
        color: 'black',
        padding: 0,
        marginLeft: 'auto',
    }
});

const StepSectionHeader = ({title, markerColor = 'grey', addButton, addCardHandler, ...props}) => {
    const classes = useStyle({markerColor});
    return (
        <Paper elevation={0} classes={{root: classes.root}} {...props}>
            <FiberManualRecord className={classes.marker}/>
            {title}
            <IconButton className={classes.button} onClick={addCardHandler}>
                {addButton && <AddIcon/>}
            </IconButton>
        </Paper>
    );
};

export default StepSectionHeader;