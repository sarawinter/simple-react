import styles from "./SimpleButton.module.scss";
import { ISimpleButton } from "./SimpleButtonModel";

function SimpleButton({ ...model }: ISimpleButton) {
  const cssStyle = styles[model.style];

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
