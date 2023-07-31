'use strict';

var jsxRuntime = require('react/jsx-runtime');

var styles$1 = ".box {\n  font-size: 20px;\n  padding: 20px;\n  border: 2px solid gold;\n  margin: 10px;\n}\n.box.one {\n  background-color: aquamarine;\n}\n.box.two {\n  background-color: rgb(255, 220, 175);\n}\n.box.three {\n  background-color: rgb(255, 249, 172);\n}";

function SimpleBox({ text, style }) {
    const cssStyle = styles$1[style];
    return (jsxRuntime.jsx("div", { className: `${styles$1.box} ${cssStyle}`, children: text }));
}

var styles = ".button {\n  border: 2px solid white;\n  padding: 10px;\n  border-radius: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.primary {\n  background-color: blue;\n  color: white;\n}\n.primary:hover {\n  background-color: lightblue;\n  color: black;\n}\n\n.secondary {\n  background-color: green;\n  color: white;\n}\n.secondary:hover {\n  background-color: lightgreen;\n  color: black;\n}";

function SimpleButton({ ...model }) {
    const cssStyle = styles[model.style];
    return (jsxRuntime.jsx("button", { onClick: model.onClickEvent, className: `${styles.button} ${cssStyle}`, title: model.title, children: model.text }));
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SimpleBox: SimpleBox,
    SimpleButton: SimpleButton
});

var SimpleBoxStyleEnum;
(function (SimpleBoxStyleEnum) {
    SimpleBoxStyleEnum["one"] = "one";
    SimpleBoxStyleEnum["two"] = "two";
    SimpleBoxStyleEnum["three"] = "three";
})(SimpleBoxStyleEnum || (SimpleBoxStyleEnum = {}));

var SimpleButtonStyleEnum;
(function (SimpleButtonStyleEnum) {
    SimpleButtonStyleEnum["primary"] = "primary";
    SimpleButtonStyleEnum["secondary"] = "secondary";
})(SimpleButtonStyleEnum || (SimpleButtonStyleEnum = {}));

var enums = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get SimpleBoxStyleEnum () { return SimpleBoxStyleEnum; },
    get SimpleButtonStyleEnum () { return SimpleButtonStyleEnum; }
});

exports.components = index;
exports.enums = enums;
