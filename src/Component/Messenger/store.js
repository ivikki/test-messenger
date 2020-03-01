import { layoutStore } from './Layout/store';

const init = {
    open: false
};

const messengerStore = store => {
    // Initial state
    store.on('@init', () => (init));

    // Reducers returns only changed part of the state
    store.on('open', () => ({ open: true }));
    store.on('close', () => ({ open: false }));
    store.on('reset', () => (init));
};

export default [
    messengerStore,
    layoutStore
];
