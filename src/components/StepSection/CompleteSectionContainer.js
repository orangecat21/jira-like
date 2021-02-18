import StepSection from './index';
import {connect} from 'react-redux';
import {moveToInspectionAC} from '../../redux/reducers/actionCreators';

const mapStateToProps = (state) => {
    return {
        tasks: state.inspection.tasks,
        header: 'Завершено',
        headerMarkerColor: 'blue',
    };
};

const mapDispatchToProps = {
    moveLeft: moveToInspectionAC,
};

const CompleteSectionContainer = connect(mapStateToProps, mapDispatchToProps)(StepSection);

export default CompleteSectionContainer;