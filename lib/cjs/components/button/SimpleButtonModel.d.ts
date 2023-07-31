/// <reference types="react" />
export interface ISimpleButton {
    onClickEvent: React.MouseEventHandler<HTMLElement>;
    text: string;
    style: SimpleButtonStyleEnum;
    title?: string;
}
export declare enum SimpleButtonStyleEnum {
    primary = "primary",
    secondary = "secondary"
}
