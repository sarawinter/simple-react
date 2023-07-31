import "./App.module.scss";
import { SimpleBox, SimpleButton } from "./components";
import { SimpleBoxStyleEnum, SimpleButtonStyleEnum } from "./enums";

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
