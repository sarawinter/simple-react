import "./App.module.scss";
import SimpleBox from "./components/box/SimpleBox";
import { SimpleBoxStyleEnum } from "./components/box/SimpleBoxModel";
import SimpleButton from "./components/button/SimpleButton";
import { SimpleButtonStyleEnum } from "./components/button/SimpleButtonModel";

function App() {
  const onBtnOneClick = () => {
    console.log("primary button clicked");
  };
  const onBtnTwoClick = () => {
    console.log("secondary button clicked");
  };
  return (
    <div>
      <p>My components</p>
      <SimpleButton
        style={SimpleButtonStyleEnum.primary}
        text="Primary button"
        onClickEvent={onBtnOneClick}
        title="Title"
      />
      <SimpleButton
        style={SimpleButtonStyleEnum.secondary}
        text="Secondary button"
        onClickEvent={onBtnTwoClick}
      />
      <SimpleBox style={SimpleBoxStyleEnum.one} text="Box 1" />
      <SimpleBox style={SimpleBoxStyleEnum.two} text="Box 2" />
      <SimpleBox style={SimpleBoxStyleEnum.three} text="Box 3" />
    </div>
  );
}

export default App;
