import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setColor } from '../../state/actions';
import './ChooseColor.scss';

const ChooseColor = () => {
    const dispatch = useDispatch();
    const [mainColor, setMainColor] = useState('#ffffff');
    const [gradientOpened, setGradientOpened] = useState(false);
    const [extraColor, setExtraColor] = useState('#ffffff');
    const [gradientType, setGradientType] = useState('linear');
    const [gradientAngle, setGradientAngle] = useState(50);

    const setFinalColor = () => {
        let color;

        if (!gradientOpened) {
            color = mainColor;
        } else {
            if (gradientType === 'linear') {
                color = `linear-gradient(${gradientAngle}deg, ${mainColor}, ${extraColor})`;
            } else {
                color = `radial-gradient(${mainColor}, ${extraColor})`;
            }
        }
        dispatch(setColor(color));
    };

    useEffect(() => {
        setFinalColor();
    }, [mainColor, extraColor, gradientType, gradientAngle]);

    const changeMainColor = e => {
        setMainColor(e.target.value);
    };

    const toggleGradient = () => {
        setGradientOpened(!gradientOpened);
    };

    const changeExtraColor = e => {
        setExtraColor(e.target.value);
    };

    const changeGradientType = e => {
        setGradientType(e.target.value);
    };

    const changeGradientAngle = e => {
        setGradientAngle(e.target.value);
    };

    return (
        <>
            <div className="banner-form__label">Background color</div>
            <label className="color-selector">
                <span className="color-selector__circle" style={{ background: mainColor }} />
                <span className="color-selector__span">{mainColor}</span>
                <input
                    type="color"
                    value={mainColor}
                    onChange={changeMainColor}
                    className="color-selector__hidden"
                />
            </label>
            <div
                className="banner-form__label banner-form__label_dropdown"
                onClick={toggleGradient}
            >
                {gradientOpened ? <span>&#9660;</span> : <span>&#9654;</span>} Gradient
            </div>
            {gradientOpened ? (
                <>
                    <label className="color-selector">
                        <span
                            className="color-selector__circle"
                            style={{ background: extraColor }}
                        />
                        <span className="color-selector__span">{extraColor}</span>
                        <input
                            type="color"
                            value={extraColor}
                            onChange={changeExtraColor}
                            className="color-selector__hidden"
                        />
                    </label>
                    <select
                        className="color-selector__gradient-type"
                        defaultValue="linear"
                        onChange={changeGradientType}
                    >
                        <option>linear</option>
                        <option>radial</option>
                    </select>
                    {gradientType === 'linear' ? (
                        <>
                            <span
                                className="range-label"
                                style={{ left: `${(gradientAngle * 125) / 360}px` }}
                            >
                                {gradientAngle}deg
                            </span>
                            <input
                                className="color-selector__gradient-angle"
                                type="range"
                                min="0"
                                max="360"
                                onChange={changeGradientAngle}
                                defaultValue="50"
                            />
                            <div className="range-minmax">
                                <span>0</span>
                                <span>360</span>
                            </div>
                        </>
                    ) : null}
                </>
            ) : null}
        </>
    );
};

export default ChooseColor;
