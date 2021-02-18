import StepSection from './index';
import {connect} from 'react-redux';
import {moveToWorkAC, moveToCompleteAC} from '../../redux/reducers/actionCreators';

const mapStateToProps = (state) => {
    return {
        tasks: state.inspection.tasks,
        header: 'Приемка',
        headerMarkerColor: 'orange',
    };
};

const mapDispatchToProps = {
    moveLeft: moveToWorkAC,
    moveRight: moveToCompleteAC,
};

const InspectionSectionContainer = connect(mapStateToProps, mapDispatchToProps)(StepSection);

export default InspectionSectionContainer;