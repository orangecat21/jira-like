import React from 'react';

import {makeStyles, Paper} from '@material-ui/core';
import TaskCard from './TaskCard';

const useStyle = makeStyles({
    root: {
        padding: 10,
        backgroundColor: '#F2F4F5',
    },
});

const TaskList = ({tasks, ...props}) => {
    const classes = useStyle();
    return (
        <Paper elevation={0} classes={{root: classes.root}} {...props}>
            {tasks && tasks.map(item => <TaskCard/>)}
        </Paper>
    );
};

export default TaskList;