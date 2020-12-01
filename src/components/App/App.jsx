import React from 'react';
import { Provider } from 'react-redux';

import BannerForm from '../BannerForm/BannerForm';
import Preview from '../Preview/Preview';
import store from '../../state/store';
import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="banner-maker">
                <BannerForm />
                <Preview />
            </div>
        </Provider>
    );
};

export default App;
