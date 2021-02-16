import actionTypes from '../actionTypes';

const initialState = {
    tasks: [
        {
            id: 1,
            text: 'Установка плит под фундамент',
        },
        {
            id: 2,
            text: 'Земельные работы по подготовке площадки',
        },
    ],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            };

        case actionTypes.MOVE_TASK_TO_ORDER:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };

        case actionTypes.MOVE_TASK_TO_WORK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.task.id),
            }

        default:
            return state;
    }
};

export default orderReducer;