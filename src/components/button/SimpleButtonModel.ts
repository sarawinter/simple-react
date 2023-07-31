export interface ISimpleButton {
  onClickEvent: React.MouseEventHandler<HTMLElement>;
  text: string;
  style: SimpleButtonStyleEnum;
  title?: string;
}

export enum SimpleButtonStyleEnum {
  primary = "primary",
  secondary = "secondary",
}
