import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerHTML, setBannerJSON } from '../../state/actions';
import PreviewHeader from '../PreviewHeader/PreviewHeader';

import './Preview.scss';

const Preview = () => {
    const dispatch = useDispatch();
    const html = useRef();
    const shape = useSelector(state => state.banner.shape);
    const color = useSelector(state => state.banner.color);
    const textColor = useSelector(state => state.banner.textColor);
    const imageURI = useSelector(state => state.banner.imageURI);
    const firstLineText = useSelector(state => state.banner.firstLine);
    const secondLineText = useSelector(state => state.banner.secondLine);
    const thirdLineText = useSelector(state => state.banner.thirdLine);

    const calculateFontSize = line => (line.length > 20 ? 900 / line.length : 45);
    const firstFontSize = calculateFontSize(firstLineText);
    const secondFontSize = calculateFontSize(secondLineText);
    const thirdFontSize = calculateFontSize(thirdLineText);

    const bannerJSON = {
        shape,
        color,
        textColor,
        imageURI,
        firstLineText,
        secondLineText,
        thirdLineText
    };

    useEffect(() => {
        dispatch(setBannerHTML(html.current.outerHTML));
        dispatch(setBannerJSON(JSON.stringify(bannerJSON)));
    }, [shape, color, textColor, imageURI, firstLineText, secondLineText, thirdLineText]);

    const background = imageURI
        ? {
              backgroundImage: `url(${imageURI})`,
              backgroundSize: 'cover'
          }
        : {
              background: color
          };

    return (
        <div className="preview-zone">
            <PreviewHeader />
            <div className="banner-container">
                <div
                    className={`banner banner_${shape}`}
                    style={{
                        color: textColor,
                        ...background
                    }}
                    ref={html}
                    id="banner"
                >
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
