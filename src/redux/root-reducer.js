import { combineReducers } from 'redux';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
    general: {
        modal: modalReducer
    },
    
});