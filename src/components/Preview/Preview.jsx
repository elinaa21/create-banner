import React from 'react';
import { useSelector } from 'react-redux';
import PreviewHeader from '../PreviewHeader/PreviewHeader';

import './Preview.scss';

const Preview = () => {
    const shape = useSelector(state => state.banner.shape);
    const color = useSelector(state => state.banner.color);
    const firstLineText = useSelector(state => state.banner.firstLine);
    const firstFontSize = firstLineText.length > 20 ? 900 / firstLineText.length : 45;

    return (
        <div className="preview-zone">
            <PreviewHeader />
            <div className="banner-container">
                <div className={`banner_${shape}`} style={{ background: color }}>
                    <div
                        className="banner__first-line"
                        style={{ fontSize: firstFontSize }}
                        id="firstLine"
                    >
                        {firstLineText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
