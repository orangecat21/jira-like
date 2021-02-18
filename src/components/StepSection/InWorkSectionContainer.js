import StepSection from './index';
import {connect} from 'react-redux';
import {moveToOrderAC, moveToInspectionAC} from '../../redux/reducers/actionCreators';

const mapStateToProps = (state) => {
    return {
        tasks: state.inWork.tasks,
        header: 'В работе',
        headerMarkerColor: '#74CE98',
    };
};

const mapDispatchToProps = {
    moveLeft: moveToOrderAC,
    moveRight: moveToInspectionAC,
};

const InWorkSectionContainer = connect(mapStateToProps, mapDispatchToProps)(StepSection);

export default InWorkSectionContainer;