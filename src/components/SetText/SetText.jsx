import React from 'react';
import { useDispatch } from 'react-redux';

import { setFirstLine, setSecondLine, setThirdLine } from '../../state/actions';
import './SetText.scss';

const SetText = () => {
    const dispatch = useDispatch();

    const updateFirstLine = e => {
        dispatch(setFirstLine(e.target.value));
    };

    const updateSecondLine = e => {
        dispatch(setSecondLine(e.target.value));
    };

    const updateThirdLine = e => {
        dispatch(setThirdLine(e.target.value));
    };

    return (
        <>
            <div className="banner-form__label">Text</div>
            <input
                className="set-text__input"
                placeholder="First line"
                onChange={updateFirstLine}
            />
            <input
                className="set-text__input"
                placeholder="Second line"
                onChange={updateSecondLine}
            />
            <input
                className="set-text__input"
                placeholder="Third line"
                onChange={updateThirdLine}
            />
        </>
    );
};

export default SetText;
