import React from 'react';

import s from './style.module.scss';
import img from './loader.svg';

export function Loader () {
    return <img className={s.loader} src={img} alt="loader" />;
}
