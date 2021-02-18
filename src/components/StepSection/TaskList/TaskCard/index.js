import React from 'react';

import {makeStyles, Card, Typography, Grid} from '@material-ui/core';
import {
    ArrowUpward as ArrowMarker,
    ChatBubbleOutline,
    ChatBubbleOutline as CommentIcon,
    Warning as WarningIcon
} from '@material-ui/icons';

import clsx from 'clsx';
import defaultAvatar from '../../../../assets/img/defaultAvatar.jpg'

const useStyle = makeStyles({
    root: {
        cursor: 'move',
        padding: 8,
        '&:not(:last-child)': {
            marginBottom: 10,
        }
    },
    text: {
        cursor: 'text',
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

const TaskCard = ({text, arrowMarker, colorMarker, commentLnegth, isWarning, deadline, user, ...props}) => {
    const classes = useStyle({colorMarker});
    return (
        <Card elevation={4} classes={{root: classes.root, firstChild: classes.firstChild}}>
            <Typography gutterBottom className={classes.text}>
                {text}
            </Typography>
            <Grid container alignItems='flex-end'>
                {arrowMarker && <ArrowMarker className={clsx(classes.icon, classes.arrow)}/>}

                {commentLnegth > 0 && <CommentIcon className={classes.icon}/>}

                {commentLnegth > 0 && <Typography className={classes.comment}>{commentLnegth}</Typography>}

                {isWarning && <WarningIcon className={clsx(classes.icon, classes.warning)}/>}

                {
                    deadline && <Typography className={classes.deadline}>
                        {Math.ceil((Date.parse(deadline) - Date.now()) / (1000 * 3600 * 24)) + 'д'}
                    </Typography>
                }

                <img src={user?.avatar || defaultAvatar} alt='User Avatar' className={classes.avatar}/>

            </Grid>
        </Card>
    );
};

export default TaskCard;