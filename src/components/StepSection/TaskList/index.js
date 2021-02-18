import React from 'react';

import {makeStyles, Paper} from '@material-ui/core';
import TaskCard from './TaskCard';

const useStyle = makeStyles({
    root: {
        padding: 10,
        backgroundColor: '#F2F4F5',
    },
});

const TaskList = ({tasks, cardClickHandler, moveLeft, moveRight, ...props}) => {
    const classes = useStyle();
    return (
        <Paper elevation={0} classes={{root: classes.root}} {...props}>
            {
                tasks && tasks.map(task => <TaskCard key={task.id}
                                                     task={task}
                                                     moveLeft={moveLeft}
                                                     moveRight={moveRight}
                                                     cardClickHandler={cardClickHandler}/>)
            }
        </Paper>
    );
};

export default TaskList;