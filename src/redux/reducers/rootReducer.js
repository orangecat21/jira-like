import {combineReducers} from 'redux';
import completeReducer from './completeReducer';
import inspectionReducer from './inspectionReducer';
import inWorkReducer from './inWorkReducer';
import orderReducer from './orderReducer';

const reducers = combineReducers({
    complete: completeReducer,
    inspection: inspectionReducer,
    inWork: inWorkReducer,
    order: orderReducer,
});

export default reducers;