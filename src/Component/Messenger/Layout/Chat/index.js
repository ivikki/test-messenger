import React from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../../../Loader';

import s from './style.module.scss';
import connect from 'storeon/react/connect';

class Chat extends React.PureComponent {

    state = {
        message: ''
    };

    chatRef = React.createRef();

    componentDidMount () {
        window.heightFrame.onresize = () => {
            this.chatRef.current.scrollTop = 999999;
        };
    }

    handleBack = () => {
        const { dispatch } = this.props;

        dispatch('back');
    };

    handleChange = e => {
        const message = e.target.value;
        this.setState({
            message
        });
    };

    sendMessage = () => {
        const { dispatch } = this.props;

        dispatch('sendMessage', this.state.message);
        this.setState({
            message: ''
        });
    };


    myMessage = (i, text) => {
        return (
            <div key={i}>
                <div className={s.myMessage}>
                    <div className={s.text}>
                        <p>{text}</p>
                    </div>
                </div>
                <div className={s.clear} />
            </div>
        );
    };

    message = (i, text) => {
        return (
            <div key={i} className={s.message}>
                <div className={s.avatar} />
                <div className={s.text}>
                    <p>{text}</p>
                </div>
            </div>
        );
    };

    render () {
        const { messages, layoutInit, sendingMessage } = this.props;

        return (
            <div className={s.wrapper}>
                <div className={s.header}>
                    <span onClick={this.handleBack} className={s.back} />
                    <p className={s.name}>John doe</p>
                </div>
                <div ref={this.chatRef} className={s.chat}>
                    <div className={s.holder}>
                        <iframe name="heightFrame" title="height" className={s.frame} />
                        {layoutInit
                            ? <div>
                                {messages.map((m, i) => (m.name === 'You' ? this.myMessage(i, m.text) : this.message(i, m.text)))}
                            </div> : <Loader />
                        }
                    </div>
                </div>
                <div className={s.messenger}>
                    <input autoFocus className={s.input} type="text" onChange={this.handleChange} value={this.state.message} />
                    <span className={s.attach}/>
                    <button onClick={this.sendMessage} className={s.button} type="button" />
                    {sendingMessage ? <Loader /> : null}
                </div>
            </div>
        );
    }
}
Chat.propTypes={
    messages: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    layoutInit: PropTypes.bool.isRequired,
    sendingMessage: PropTypes.bool.isRequired,
};

export default connect('messages', 'layoutInit', 'sendingMessage', Chat);

