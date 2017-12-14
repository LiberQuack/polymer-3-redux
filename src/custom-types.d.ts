declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: { id: string, content: string, viewBox: string };
    export default content;
}

declare module "d3-cloud" {
    const content: any;
    export default content;
}

declare module "@polymer/polymer/polymer-element" {
    export class Element extends HTMLElement {
        connectedCallback(): void;
        disconnectedCallback(): void;
    }
}

declare class Contructor {
    constructor(...args: any[])
}