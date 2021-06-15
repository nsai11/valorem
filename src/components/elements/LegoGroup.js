import React from 'react';
import classNames from 'classnames';

const LegoGroup = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'lego-group',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    />
  );
}

export default LegoGroup;