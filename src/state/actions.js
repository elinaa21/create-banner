import { actionTypes } from './reducers';

export const setShape = shape => ({
    type: actionTypes.SET_SHAPE,
    payload: { shape },
});
