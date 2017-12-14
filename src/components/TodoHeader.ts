import {AntiShadowElement} from "./AntiShadow";

class TodoHeader extends AntiShadowElement {

    static get template() {
        return `
            <nav class="header">Polymer 3 + Redux / Total Items ({{todosCount}})</nav>
        `
    }

    static get properties() {
        return {
            todosCount: Number
        }
    }

    onReduxChange(state) {
        this.todosCount = state.todoReducer.todos.length;
    }

}

customElements.define('todo-header', TodoHeader);

export {TodoHeader};