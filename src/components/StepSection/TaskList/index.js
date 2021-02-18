import React from 'react';

import {makeStyles, Paper} from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        padding: 10,
        width: 250,
        backgroundColor: '#F2F4F5',
    },
});

const TaskList = ({children, ...props}) => {
    const classes = useStyle();
    return (
        <Paper elevation={0} classes={{root: classes.root}} {...props}>
            {children}
        </Paper>
    );
};

export default TaskList;