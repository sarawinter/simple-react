function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".SimpleBox-module_box__D-ZwE {\n  font-size: 20px;\n  padding: 20px;\n  border: 2px solid gold;\n  margin: 10px;\n}\n.SimpleBox-module_box__D-ZwE.SimpleBox-module_one__bmxwV {\n  background-color: aquamarine;\n}\n.SimpleBox-module_box__D-ZwE.SimpleBox-module_two__2VWnQ {\n  background-color: rgb(255, 220, 175);\n}\n.SimpleBox-module_box__D-ZwE.SimpleBox-module_three__XYWfR {\n  background-color: rgb(255, 249, 172);\n}";
var styles$1 = {"box":"SimpleBox-module_box__D-ZwE","one":"SimpleBox-module_one__bmxwV","two":"SimpleBox-module_two__2VWnQ","three":"SimpleBox-module_three__XYWfR"};
styleInject(css_248z$1);

const _jsxFileName$1 = "C:\\Repos\\npmPackages\\simple-react\\src\\components\\box\\SimpleBox.tsx";

function SimpleBox({text, style}) {

  const cssStyle = styles$1[style];

  return (
    React.createElement('div', { className: `${styles$1.box} ${cssStyle}`, __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 9}}
      , text
    )
  );
}

var css_248z = ".SimpleButton-module_button__F1UOY {\n  border: 2px solid white;\n  padding: 10px;\n  border-radius: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.SimpleButton-module_primary__XW6kx {\n  background-color: blue;\n  color: white;\n}\n.SimpleButton-module_primary__XW6kx:hover {\n  background-color: lightblue;\n  color: black;\n}\n\n.SimpleButton-module_secondary__OLHpw {\n  background-color: green;\n  color: white;\n}\n.SimpleButton-module_secondary__OLHpw:hover {\n  background-color: lightgreen;\n  color: black;\n}";
var styles = {"button":"SimpleButton-module_button__F1UOY","primary":"SimpleButton-module_primary__XW6kx","secondary":"SimpleButton-module_secondary__OLHpw"};
styleInject(css_248z);

const _jsxFileName = "C:\\Repos\\npmPackages\\simple-react\\src\\components\\button\\SimpleButton.tsx";

function SimpleButton({ ...model }) {
  const cssStyle = styles[model.style];

  return (
    React.createElement('button', {
      onClick: model.onClickEvent,
      className: `${styles.button} ${cssStyle}`,
      title: model.title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}

      , model.text
    )
  );
}

export { SimpleBox, SimpleButton };
