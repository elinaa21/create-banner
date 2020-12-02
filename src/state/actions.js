import { actionTypes } from './reducers';

export const setShape = shape => ({
    type: actionTypes.SET_SHAPE,
    payload: { shape },
});

export const setColor = color => ({
    type: actionTypes.SET_COLOR,
    payload: { color },
});
