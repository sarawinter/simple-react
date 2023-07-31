import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./SimpleBox.module.scss";
function SimpleBox(_a) {
    var text = _a.text, style = _a.style;
    var cssStyle = styles[style];
    return (_jsx("div", { className: "".concat(styles.box, " ").concat(cssStyle), children: text }));
}
export default SimpleBox;
