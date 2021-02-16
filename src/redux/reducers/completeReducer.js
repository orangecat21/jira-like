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

const completeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default completeReducer;