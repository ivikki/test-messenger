import { getMessages, sendMessage } from '../../../service/api.service';

const init = {
    focus: true,
    messages: [],
    layoutInit: false,
    sendingMessage: false
};

export const layoutStore = store => {
    // Initial state
    store.on('@init', () => (init));

    store.on('layout/init', () => {
        store.dispatch('getMessages');
    });

    // Reducers returns only changed part of the state
    store.on('focus', () => ({ focus: false }));
    store.on('back', () => ({ focus: true }));

    store.on('getMessages', async () => {
        const messages = await getMessages();

        store.dispatch('saveMessages', messages);
    });

    store.on('sendingMessage', () => ({ sendingMessage: true }));

    store.on('sendMessage', async (state, text) => {
        store.dispatch('sendingMessage');

        await sendMessage(text);

        store.dispatch('getMessages');
    });

    store.on('saveMessages', (state, messages) => ({ messages, layoutInit: true, sendingMessage: false }));

    store.on('reset', () => (init));
};
