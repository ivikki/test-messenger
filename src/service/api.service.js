import moment from 'moment';

const messages = [
    {
        name: 'John Doe',
        text: 'Do you like space?',
        date: moment().format('YYYY-MM-DD HH:mm:ss')
    }
];
const botAnswers = [
    'Hello!',
    'How are you?',
    'Let\'s discuss it',
    'Im fine, Thanks!',
    'no',
    'You are right!'
];


function rand (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay (time = 300) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

export async function getMessages (limit = 10) {
    await delay(rand(500, 1500));
    const newMessages = messages.slice();
    const count = newMessages.length-limit;
    return newMessages.slice(count < 0 ? 0 : count);
}

export async function sendMessage (text) {
    await delay(rand(500, 1500));

    // user message
    messages.push({
        name: 'You',
        text,
        date: moment().format('YYYY-MM-DD HH:mm:ss')
    });

    const index = rand(0, 5);

    // bot answer message
    messages.push({
        name: 'John Doe',
        text: botAnswers[index],
        date: moment().format('YYYY-MM-DD HH:mm:ss')
    });
}

