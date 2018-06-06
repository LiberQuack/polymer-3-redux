import { PolymerElement } from "@polymer/polymer/polymer-element";

/**
 * @extends HTMLElement
 * Class to prevent use of shadowroot
 * also adds sugar for connecting element to redux
 */
export class AntiShadowElement extends PolymerElement {

    [x: string]: any;

    /**
     * @override
     */
    _attachDom(dom:HTMLElement) {
        return this.appendChild(dom);
    }

    connectedCallback() {
        super.connectedCallback();
    }

}
