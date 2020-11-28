export const actionTypes = {
    SET_SHAPE: 'SET_SHAPE',
};

const initialState = {
    shape: [],
};

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SHAPE:
            return {
                ...state,
                shape: action.payload.shape,
            };

        default:
            return { ...state };
    }
};
