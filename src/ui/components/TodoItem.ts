import {AntiShadowElement} from "../util/AntiShadowElement";
import {html} from "@polymer/polymer/polymer-element"


class TodoItem extends AntiShadowElement {

    static get template() {
        return html`
            <label class="toditem">
                <span>[[todoText]]</span>
            </label>
            <br>
        `
    }
}

customElements.define('todo-item', TodoItem);

export {AntiShadowElement}
