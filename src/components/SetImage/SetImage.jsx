import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setImageURI } from '../../state/actions';
import './SetImage.scss';

const SetImage = () => {
    const dispatch = useDispatch();
    const URI = useSelector(state => state.banner.imageURI);

    const updateImageURI = e => {
        dispatch(setImageURI(e.target.value));
    };

    const uploadImage = e => {
        const file = e.target.files[0];
        dispatch(setImageURI(URL.createObjectURL(file)));
    };

    return (
        <>
            <div className="banner-form__label">Background image</div>
            <div className="set-image-container">
                <input
                    type="url"
                    className="set-text__input"
                    placeholder="URI"
                    onChange={updateImageURI}
                    value={URI}
                />
                <label htmlFor="file_input" className="upload-button">
                    Upload
                </label>
                <input type="file" accept="image/*" id="file_input" onChange={uploadImage} />
            </div>
        </>
    );
};

export default SetImage;
