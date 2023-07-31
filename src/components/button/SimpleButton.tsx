import React from 'react';
import styles from "./SimpleButton.module.scss";
import { ISimpleButton, SimpleButtonStyleEnum } from "./SimpleButtonModel";

const SimpleButton: React.FC<ISimpleButton> = ({ ...model }) => {
  const cssStyle = styles[model.style || SimpleButtonStyleEnum.primary];

  return (
    <button
      onClick={model.onClickEvent}
      className={`${styles.button} ${cssStyle}`}
      title={model.title}
    >
      {model.text}
    </button>
  );
}

export default SimpleButton;
