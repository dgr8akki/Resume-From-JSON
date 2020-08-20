import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.scss';

const customLoader = () => (
  <div className={style.loaderWrapper}>
    <Loader
      type="Puff"
      color="#000000"
      height={50}
      width={50}
    />
  </div>
);

export default customLoader;
