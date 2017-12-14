import {appState, RootState} from '../../state/store';

export interface ReduxBindable {
    stateReceiver(state: RootState): void;
}

/**
 * Intended to be used in element inside the method
 * connectedCallback
 *
 * <pre>
 * <strong>
 *   connectedCallback() {
 *       super.connectedCallback();
 *       connectToRedux(this);
 *   }
 * </strong>
 * </pre>
 *
 * @param {ReduxBindable} elm
 */
export function connectToRedux(elm: ReduxBindable) {
    elm.stateReceiver(appState.getState());
    appState.subscribe(() => {
        elm.stateReceiver(appState.getState());
    })
}