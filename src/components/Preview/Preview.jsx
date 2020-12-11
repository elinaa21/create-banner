import React from 'react';
import { useSelector } from 'react-redux';
import PreviewHeader from '../PreviewHeader/PreviewHeader';

import './Preview.scss';

const Preview = () => {
    const shape = useSelector(state => state.banner.shape);
    const color = useSelector(state => state.banner.color);
    const firstLineText = useSelector(state => state.banner.firstLine);
    const firstFontSize = firstLineText.length > 20 ? 900 / firstLineText.length : 45;
    const secondLineText = useSelector(state => state.banner.secondLine);
    const secondFontSize = secondLineText.length > 20 ? 900 / secondLineText.length : 45;
    const thirdLineText = useSelector(state => state.banner.thirdLine);
    const thirdFontSize = thirdLineText.length > 20 ? 900 / thirdLineText.length : 45;

    return (
        <div className="preview-zone">
            <PreviewHeader />
            <div className="banner-container">
                <div className={`banner_${shape}`} style={{ background: color }}>
                    <div className="banner__text" style={{ fontSize: firstFontSize }}>
                        {firstLineText}
                    </div>
                    <div className="banner__text" style={{ fontSize: secondFontSize }}>
                        {secondLineText}
                    </div>
                    <div className="banner__text" style={{ fontSize: thirdFontSize }}>
                        {thirdLineText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
