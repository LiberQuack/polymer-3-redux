import {AntiShadowElement} from "./AntiShadow";

class TodoItem extends AntiShadowElement {

    static get template() {
        return `
            <label class="toditem">
                <span>[[todoText]]</span>
            </label>
            <br>
        `
    }
}

customElements.define('todo-item', TodoItem);

export {AntiShadowElement}