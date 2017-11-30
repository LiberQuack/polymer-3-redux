import {Element as PolymerElement} from "../../node_modules/@polymer/polymer/polymer-element";
import {appState} from "../state/store";

class AntiShadowElement extends PolymerElement {

    /**
     * @override
     */
    _attachDom(dom) {
        return this.appendChild(dom) && this;
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.onReduxChange){
            this.onReduxChange(appState.getState());
            appState.subscribe(_ => {
                let currentState = appState.getState();
                this.onReduxChange(currentState);
            });
        }
    }
}

export {AntiShadowElement}