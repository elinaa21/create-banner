import React from 'react';

import './PreviewHeader.scss';

const PreviewHeader = () => {
    return (
        <div className="preview-header">
            <button className="preview-header__button">Save as png</button>
            <button className="preview-header__button">Copy HTML</button>
            <button className="preview-header__button">Copy JSON</button>
        </div>
    );
};

export default PreviewHeader;
