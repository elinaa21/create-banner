import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { delayCallingFunction } from '../../modules/copyToClipboard';
import { createURI } from '../../modules/createURI';
import './PreviewHeader.scss';

const PreviewHeader = () => {
    const bannerHTML = useSelector(state => state.banner.bannerHTML);
    const bannerJSON = useSelector(state => state.banner.bannerJSON);
    // const bannerURI = useSelector(state => state.banner.bannerURI);
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

    async function saveAsPNG() {
        const bannerURI = await createURI();
        const link = document.createElement('a');
        link.href = bannerURI;
        link.download = 'banner_by_elina';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
