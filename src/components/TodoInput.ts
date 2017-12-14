import {AntiShadowElement} from "./AntiShadow";
import {appState} from "../state/store";

class TodoInput extends AntiShadowElement {

    static get template() {
        return `
            <input 
                id="todoinput" 
                class="form--todoinput"
                placeholder="Lembrar que devo..." 
                value="{{tempTodo::input}}"
                type="text">
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.$.todoinput.addEventListener('keypress', e => {
            if (this.tempTodo && e.keyCode === 13) {
                appState.dispatch({type: 'ADD', payload: this.tempTodo});
                this.tempTodo = '';
            }
        });

        setTimeout(_ => {
            this.$.todoinput.classList.remove('isLoading');
            this.$.todoinput.focus();
            this.$.todoinput.click();
        }, 150);
    }

}

customElements.define('todo-input', TodoInput);

export {TodoInput};