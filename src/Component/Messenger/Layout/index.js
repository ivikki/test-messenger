import React from 'react';
import connect from 'storeon/react/connect';
import PropTypes from 'prop-types';

import s from './style.module.scss';
import History from '../Layout/History';
import Chat from '../Layout/Chat';

class Layout extends React.PureComponent {

    componentDidMount () {
        const { dispatch } = this.props;

        dispatch('layout/init');
    }

    handleClose = () => {
        const { dispatch } = this.props;

        dispatch('close');
        dispatch('reset');
    };

    render () {
        const { focus } = this.props;

        return (
            <div className={s.wrapper}>
                <div className={s.close} onClick={this.handleClose} />
                {focus
                    ? <History />
                    : <Chat />
                }
            </div>
        );
    }
}
Layout.propTypes={
    dispatch: PropTypes.func.isRequired,
    focus: PropTypes.bool.isRequired
};

export default connect('focus', Layout);

