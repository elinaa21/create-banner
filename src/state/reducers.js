export const actionTypes = {
    SET_SHAPE: 'SET_SHAPE',
    SET_COLOR: 'SET_COLOR',
};

const initialState = {
    shape: [],
    color: '',
};

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SHAPE:
            return {
                ...state,
                shape: action.payload.shape,
            };

        case actionTypes.SET_COLOR:
            return {
                ...state,
                color: action.payload.color,
            };

        default:
            return { ...state };
    }
};
