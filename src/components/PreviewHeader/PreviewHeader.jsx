import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';

import { delayCallingFunction } from '../../modules/copyToClipboard';
import './PreviewHeader.scss';

const PreviewHeader = () => {
    const bannerHTML = useSelector(state => state.banner.bannerHTML);
    const bannerJSON = useSelector(state => state.banner.bannerJSON);
    const [isCopied, setIsCopied] = useState(false);
    const [isError, setIsError] = useState(false);

    const copyToClipboard = text => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch(() => {
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 2000);
            });
    };

    const delayCopying = delayCallingFunction(copyToClipboard);

    const copyJSON = () => {
        delayCopying(bannerJSON);
    };

    const copyHTML = () => {
        delayCopying(bannerHTML);
    };

    const saveAsPNG = () => {
        html2canvas(document.getElementById('banner')).then(canvas => {
            const img = canvas.toDataURL('image/png');
            console.log(img);
        });
    };

    return (
        <div className="preview-header">
            {isCopied ? <div className="preview-header__copied">Copied &#10003;</div> : null}
            {isError ? <div className="preview-header__copied">Something went wrong</div> : null}
            <button className="preview-header__button" onClick={saveAsPNG}>
                Save as png
            </button>
            <button className="preview-header__button" onClick={copyHTML}>
                Copy HTML
            </button>
            <button className="preview-header__button" onClick={copyJSON}>
                Copy JSON
            </button>
        </div>
    );
};

export default PreviewHeader;
