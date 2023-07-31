import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.module.scss";
import { SimpleBox, SimpleButton } from "./components";
import { SimpleBoxStyleEnum, SimpleButtonStyleEnum } from "./enums";
function App() {
    var onBtnOneClick = function () {
        console.log("primary button clicked");
    };
    var onBtnTwoClick = function () {
        console.log("secondary button clicked");
    };
    return (_jsxs("div", { children: [_jsx("p", { children: "My components" }), _jsx(SimpleButton, { style: SimpleButtonStyleEnum.primary, text: "Primary button", onClickEvent: onBtnOneClick, title: "Title" }), _jsx(SimpleButton, { style: SimpleButtonStyleEnum.secondary, text: "Secondary button", onClickEvent: onBtnTwoClick }), _jsx(SimpleBox, { style: SimpleBoxStyleEnum.one, text: "Box 1" }), _jsx(SimpleBox, { style: SimpleBoxStyleEnum.two, text: "Box 2" }), _jsx(SimpleBox, { style: SimpleBoxStyleEnum.three, text: "Box 3" })] }));
}
export default App;
