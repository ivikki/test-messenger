import React from 'react';
import connect from 'storeon/react/connect';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Loader } from '../../../Loader';

import s from './style.module.scss';
import logo from './logo.svg';
import logoBlue from './logo-blue.png';

class History extends React.PureComponent {

    handleFocus = () => {
        const { dispatch } = this.props;

        dispatch('focus');
    };

    messageDate = (time) => {
        const date = moment(time);
        const duration = moment.duration(moment().diff(date));
        const seconds = Math.floor(duration.asSeconds());
        if (seconds < 60) {
            return `${seconds}s`;
        }

        if (seconds < 3600) {
            return Math.floor(duration.asMinutes()) + 'm';
        }

        if (seconds < 86400) {
            return Math.floor(duration.asHours()) + 'h';
        }

        return date.format('YYYY/MM/DD');
    };

    render () {
        const { messages, layoutInit } = this.props;

        const count = messages.length-3;
        const historyMessages = messages.slice(count < 0 ? 0 : count);

        return (
            <div className={s.wrapper}>
                <div className={s.bg}>
                    <img src={logo} alt="logo" />
                    <h3>Hello!</h3>
                    <h4>World!</h4>
                </div>
                <div className={s.messages}>
                    {layoutInit
                        ? historyMessages.map((m, i) => <div key={i} className={s.text}>
                            <p className={s.avatar} />
                            <div className={s.textWrapper}>
                                <p>{m.name} <span className={s.date}>{this.messageDate(m.date)}</span></p>
                                <p className={s.textMessage}>{m.text}</p>
                            </div>
                        </div>) : <Loader />}
                </div>
                <div className={s.messenger}>
                    <input onFocus={this.handleFocus} className={s.input} type="text" placeholder="Write a message" />
                    <span className={s.attach} />
                    <button className={s.button} />
                </div>
                <img className={s.logo} src={logoBlue} alt="logo" />
            </div>
        );
    }
}
History.propTypes={
    dispatch: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    layoutInit: PropTypes.bool.isRequired,
};

export default connect('messages', 'layoutInit', History);
