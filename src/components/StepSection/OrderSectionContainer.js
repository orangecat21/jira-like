import StepSection from './index';
import {connect} from 'react-redux';
import {addTaskAC, moveToWorkAC} from '../../redux/reducers/actionCreators';

const mapStateToProps = (state) => {
    return {
        tasks: state.order.tasks,
        header: 'Наряды',
    };
};

const mapDispatchToProps = {
    addCardHandler: addTaskAC,
    moveRight: moveToWorkAC
};

const OrderSectionContainer = connect(mapStateToProps, mapDispatchToProps)(StepSection);

export default OrderSectionContainer;