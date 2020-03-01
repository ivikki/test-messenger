import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.scss';

export function MessengerIcon ({ onClick }) {
    return <div onClick={onClick} className={s.icon} />;
}
MessengerIcon.propTypes={
    onClick: PropTypes.func.isRequired
};
