import React from 'react';
import { useSelector } from 'react-redux';
import PreviewHeader from '../PreviewHeader/PreviewHeader';

import './Preview.scss';

const Preview = () => {
    const shape = useSelector(state => state.banner.shape);
    const color = useSelector(state => state.banner.color);

    return (
        <div className="preview-zone">
            <PreviewHeader />
            <div className="banner-container">
                <div className={`banner_${shape}`} style={{ backgroundColor: color }}>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    );
};

export default Preview;
