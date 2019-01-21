import { Controller } from 'stimulus';
import { drawer, list } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'drawerList' ];
    readonly drawerTarget: HTMLElement;
    readonly drawerListTarget: HTMLElement;
    drawer: drawer.MDCDrawer;
    list: list.MDCList;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        if(localStorage.getItem('drawerOpen') === "true") {
            this.toggleDrawer();
        }
        this.list = new list.MDCList(this.drawerListTarget);
        this.list.wrapFocus = true;
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