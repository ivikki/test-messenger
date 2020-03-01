import createStore from 'storeon';
import RootStore from './Component/store';

const devtool = require('storeon/devtools');

export const store = createStore([
    ...RootStore,
    process.env.NODE_ENV !== 'production' && devtool
]);
