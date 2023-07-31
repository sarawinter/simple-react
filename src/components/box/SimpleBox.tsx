import React from 'react';
import styles from "./SimpleBox.module.scss";
import { ISimpleBox } from "./SimpleBoxModel";

const SimpleBox: React.FC<ISimpleBox> = ({text, style}: ISimpleBox) => {

  const cssStyle = styles[style];

  return (
    <div className={`${styles.box} ${cssStyle}`}>
      {text}
    </div>
  );
}

export default SimpleBox;
