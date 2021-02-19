import React, {useState} from 'react';

import {makeStyles, Card, Typography, Grid, CardActionArea} from '@material-ui/core';
import {
    ArrowUpward as ArrowMarker,
    ChatBubbleOutline as CommentIcon,
    Warning as WarningIcon
} from '@material-ui/icons';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import './dragable.css';


import defaultAvatar from '../../../../assets/img/defaultAvatar.jpg'

const useStyle = makeStyles({
    root: {
        position: 'relative',
        '&:not(:last-child)': {
            marginBottom: 10,
        }
    },
    actionArea: {
        padding: 8,
        cursor: 'move',
    },
    comment: {
        marginRight: 4,
        lineHeight: 'normal',
    },
    icon: {
        width: '0.8em',
        height: '0.8em',
        marginRight: 4,
        marginLeft: 4,
        '&:first-child': {
            marginLeft: 0,
        }
    },
    arrow: {
        color: props => props.colorMarker,
    },
    warning: {
        color: 'orange',
    },
    deadline: {
        marginLeft: 4,
        lineHeight: 'normal',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginLeft: 'auto',
    }
});

const TaskCard = (
    {
        task,
        cardClickHandler,
        moveLeft,
        moveRight,
        ...props
    }) => {
    const {text, arrowMarker, colorMarker, comment, isWarning, deadline, author} = task;
    const classes = useStyle({colorMarker});
    const [isDraged, setIsDraged] = useState(false);

    const startDragHandler = () => {
        setIsDraged(false);
    }

    const stopDragHandler = (e, data) => {
        if (data.x !== 0) {
            setIsDraged(true);
            const width = data.node.offsetWidth;
            if (width - data.x < width * 0.75) {
                moveRight && moveRight(task);
            } else if (width - data.x > width * 1.25) {
                moveLeft && moveLeft(task);
            }
        }
    };

    const clickHandler = () => {
        !isDraged && cardClickHandler && cardClickHandler();
    }


    return (
        <Draggable axis='both' onStop={stopDragHandler} onDrag={() => {
        }} onStart={startDragHandler} position={{x: 0, y: 0}}>
            <Card elevation={4} classes={{root: classes.root, firstChild: classes.firstChild}} {...props}>
                <CardActionArea onClick={clickHandler} className={classes.actionArea}>
                    <Typography gutterBottom>
                        {text}
                    </Typography>
                    <Grid container alignItems='flex-end'>
                        {arrowMarker && <ArrowMarker className={clsx(classes.icon, classes.arrow)}/>}

                        {comment.length > 0 && <CommentIcon className={classes.icon}/>}

                        {comment.length > 0 && <Typography className={classes.comment}>{comment.length}</Typography>}

                        {isWarning && <WarningIcon className={clsx(classes.icon, classes.warning)}/>}

                        {
                            deadline && <Typography className={classes.deadline}>
                                {Math.ceil((Date.parse(deadline) - Date.now()) / (1000 * 3600 * 24)) + 'д'}
                            </Typography>
                        }

                        <img src={author?.avatar || defaultAvatar} alt='User Avatar' className={classes.avatar}/>

                    </Grid>
                </CardActionArea>
            </Card>
        </Draggable>

    );
};

export default TaskCard;