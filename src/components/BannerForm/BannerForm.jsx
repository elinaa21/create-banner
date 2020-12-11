import React from 'react';

import ChooseColor from '../ChooseColor/ChooseColor';
import ChooseShape from '../ChooseShape/ChooseShape';
import ChooseTextColor from '../ChooseTextColor/ChooseTextColor';
import SetText from '../SetText/SetText';
import SetImage from '../SetImage/SetImage';
import './BannerForm.scss';

const BannerForm = () => {
    return (
        <div className="banner-form">
            <ChooseShape />
            <ChooseColor />
            <SetImage />
            <SetText />
            <ChooseTextColor />
        </div>
    );
};

export default BannerForm;
