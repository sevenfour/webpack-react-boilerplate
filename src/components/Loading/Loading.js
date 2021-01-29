import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Circle } from '../icons';

import styles from './Loading.module.css';

const Loading = props => {

  const {
    className,
    overlay,
    ...rest
  } = props;

  const loader = (
    <div
      className={clsx(styles.spinner, className)}
      role="progressbar"
      {...rest}
    >
      <p className="visuallyHidden">
        Content is loading
      </p>
      <Circle
        className={styles.circleIcon}
        color="transparent"
      />
    </div>
  );

  return overlay
    ? <div className="overlay">{loader}</div>
    : loader;
};

Loading.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.bool
};

export default Loading;
