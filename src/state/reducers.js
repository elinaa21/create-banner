export const actionTypes = {
    SET_SHAPE: 'SET_SHAPE',
    SET_COLOR: 'SET_COLOR',
    SET_FIRST_LINE: 'SET_FIRST_LINE'
};

const initialState = {
    shape: [],
    color: '',
    firstLine: '',
    secondLine: '',
    thirdLine: ''
};

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SHAPE:
            return {
                ...state,
                shape: action.payload.shape
            };

        case actionTypes.SET_COLOR:
            return {
                ...state,
                color: action.payload.color
            };

        case actionTypes.SET_FIRST_LINE:
            return {
                ...state,
                firstLine: action.payload.firstLine
            };

        default:
            return { ...state };
    }
};
