import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SelectRoute from './SelectRoute';
import { register } from './serviceWorker';
import './index.css';

ReactDOM.render(
    <SelectRoute />,
    document.getElementById('root') as HTMLElement
);
register();
