import {appState} from "../state/store";
import {AntiShadowElement} from "./AntiShadow";

import "./TodoInput";
import "./TodoItem"


class TodosPage extends AntiShadowElement {

    static get template() {
        return `
            <div id="todospage" class="l-container l-pad-30 e-fade e-from-top">
                <todo-input></todo-input><br>
                
                <dom-repeat items="[[todos]]" restamp>
                    <template>
                        <todo-item on-click="removeTodoItem" todo-text="[[item]]"></todo-item>
                    </template>
                </dom-repeat>
                
            </div>
        `
    }

    static get properties() {
        return {
            todos: {
                type: Array, value: appState.getState().todoReducer.todos
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        setTimeout(_ => this.$.todospage.classList.add("isVisible"), 50);
    }

    onReduxChange(state) {
        this.todos = state.todoReducer.todos;
    }

    removeTodoItem(e) {
        appState.dispatch({type: 'REMOVE', payload: e.model.index})
    }

}

customElements.define('todos-page', TodosPage);

export {TodosPage};