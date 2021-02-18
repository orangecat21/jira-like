import actionTypes from '../actionTypes';

export const addTaskAC = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        task,
    };
};

export const moveToOrderAC = (task) => {
    return {
        type: actionTypes.MOVE_TASK_TO_ORDER,
        task
    }
};

export const moveToWorkAC = (task) => {
    return {
        type: actionTypes.MOVE_TASK_TO_WORK,
        task
    }
};

export const moveToInspectionAC = (task) => {
    return {
        type: actionTypes.MOVE_TASK_TO_INSPECTION,
        task
    }
};

export const moveToCompleteAC = (task) => {
    return {
        type: actionTypes.MOVE_TASK_TO_COMPLETE,
        task
    }
};