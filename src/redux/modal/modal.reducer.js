const INITIAL_STATE = {
    modal: 'closed'
}

const modalReducer = ( prevState = INITIAL_STATE,action ) => {
    switch(action.type) {
        case 'SET_MODAL_STATE':
            return {
                ...prevState,
                modal: action.payload
            }
        default: 
            return prevState;
    }
}

export default modalReducer;