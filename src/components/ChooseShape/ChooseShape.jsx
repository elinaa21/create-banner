import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShape } from '../../state/actions';
import './ChooseShape.scss';

const Preview = () => {
    const dispatch = useDispatch();
    const shape = useSelector(state => state.banner.shape);

    const setVerticalShape = () => {
        dispatch(setShape('vertical'));
    };
    const setGorizontalShape = () => {
        dispatch(setShape('gorizontal'));
    };
    const setSquareShape = () => {
        dispatch(setShape('square'));
    };
    return (
        <>
            <div className="banner-form__label">Shape</div>
            <div className="shapes-container">
                <div
                    className={`shapes-container__shape-square ${
                        shape === 'square' ? 'shapes-container__shape_selected' : ''
                    }`}
                    onClick={setSquareShape}
                />
                <div
                    className={`shapes-container__shape-vertical ${
                        shape === 'vertical' ? 'shapes-container__shape_selected' : ''
                    }`}
                    onClick={setVerticalShape}
                />
                <div
                    className={`shapes-container__shape-gorizontal ${
                        shape === 'gorizontal' ? 'shapes-container__shape_selected' : ''
                    }`}
                    onClick={setGorizontalShape}
                />
            </div>
        </>
    );
};

export default Preview;
