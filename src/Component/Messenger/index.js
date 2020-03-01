import React from 'react';
import connect from 'storeon/react/connect';
import PropTypes from 'prop-types';

import { MessengerIcon } from './Icon';
import Layout from './Layout';

class Messenger extends React.PureComponent {

    handleOpen = () => {
        const { dispatch } = this.props;

        dispatch('open');
    };

    render () {
        const { open } = this.props;

        return open ? <Layout /> : <MessengerIcon onClick={this.handleOpen} />;
    }
}
Messenger.propTypes={
    dispatch: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default connect('open', Messenger);
