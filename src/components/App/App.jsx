import React from 'react';
import BannerForm from '../BannerForm/BannerForm';
import Preview from '../Preview/Preview';

import './App.scss';

const App = () => {
    return (
        <div className="banner-maker">
            <BannerForm />
            <Preview />
        </div>
    );
};

export default App;
