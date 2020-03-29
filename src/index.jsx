import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './views/app/App';
import './views/app/app.scss';

import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(<App />, document.getElementById('app'));
