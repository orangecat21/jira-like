import actionTypes from '../actionTypes';

const initialState = {
    tasks: [
        {
            text: 'Установка плит под фундамент',
        },
        {
            text: 'Земельные работы по подготовке площадки',
        },
    ],
};

const inspectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVE_TASK_TO_WORK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.task.id),
            };

        case actionTypes.MOVE_TASK_TO_INSPECTION:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };

        case actionTypes.MOVE_TASK_TO_COMPLETE:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.task.id),
            };

        default:
            return state;
    }
};

export default inspectionReducer;