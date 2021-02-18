import actionTypes from '../actionTypes';

const initialState = {
    tasks: [
        {
            id: 1,
            text: 'Установка плит под фундамент',
            arrowMarker: true,
            colorMarker: 'orange',
            // Условный массив коментов
            comment: [1,2,3],
            isWarning: true,
            deadline: '2021-03-01',
            author: {},
        },
        {
            id: 2,
            text: 'Земельные работы по подготовке площадки по установке плит для несущей стены',
            arrowMarker: true,
            colorMarker: '#74CE98',
            comment: [1,2],
            isWarning: false,
            deadline: '2021-02-23',
            author: {},
        },
    ],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            // Сымитируем создание новой карточки
            let newTask = {
                    id: Date.now(),
                    text: 'Земельные работы по подготовке площадки по установке плит для несущей стены',
                    arrowMarker: true,
                    colorMarker: '#74CE98',
                    comment: [1,2],
                    isWarning: false,
                    deadline: '2021-03-10',
                    author: {},
                };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
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