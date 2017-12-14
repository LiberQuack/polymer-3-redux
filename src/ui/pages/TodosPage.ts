import {appState} from "../../state/store";
import {AntiShadowElement} from "../util/AntiShadowElement";
import {connectToRedux, ReduxBindable} from "../util/ReduxConnector";

import "../components/TodoInput";
import "../components/TodoItem"

console.log(AntiShadowElement);
console.log(connectToRedux);
console.log(appState);
debugger;

class TodosPage extends AntiShadowElement implements ReduxBindable {

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
        connectToRedux(this);
        setTimeout(_ => this.$.todospage.classList.add("isVisible"), 50);
    }

    stateReceiver(state) {
        this.todos = state.todoReducer.todos;
    }

    removeTodoItem(e) {
        appState.dispatch({type: 'REMOVE', payload: e.model.index} as any)
    }

}

customElements.define('todos-page', TodosPage);

export {TodosPage};