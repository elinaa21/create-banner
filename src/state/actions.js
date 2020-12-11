import { actionTypes } from './reducers';

export const setShape = shape => ({
    type: actionTypes.SET_SHAPE,
    payload: { shape }
});

export const setColor = color => ({
    type: actionTypes.SET_COLOR,
    payload: { color }
});

export const setFirstLine = firstLine => ({
    type: actionTypes.SET_FIRST_LINE,
    payload: { firstLine }
});

export const setSecondLine = secondLine => ({
    type: actionTypes.SET_SECOND_LINE,
    payload: { secondLine }
});

export const setThirdLine = thirdLine => ({
    type: actionTypes.SET_THIRD_LINE,
    payload: { thirdLine }
});
