import { Controller } from 'stimulus';
import { drawer } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer' ];
    readonly drawerTarget: HTMLElement;
    drawer: drawer.MDCDrawer;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        if(localStorage.getItem('drawerOpen') === "true") {
            this.toggleDrawer();
        }
    }

    get open() {
        return this.data.get('open') === "true";
    }

    set open(state) {
        this.drawer.open = state;
        this.data.set('open', state.toString());
    }

    emitEvent() {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent("modalStateChanged", true, true, this.open);
        this.element.dispatchEvent(event);
    }

    toggleDrawer() {
        this.open = !this.open;
        this.emitEvent();
        window.localStorage.setItem('drawerOpen', this.open.toString());
    }
}