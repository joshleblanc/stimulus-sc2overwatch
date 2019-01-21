import { Controller } from 'stimulus';
import { drawer, list } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'list' ];
    readonly drawerTarget: HTMLElement;
    drawer: drawer.MDCDrawer;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        this.drawer.listen('MDCDrawer:closed', () => {
            this.open = false;
        });
    }

    get open() {
        return this.data.get('open') === "true";
    }

    set open(state) {
        this.drawer.open = state;
        this.data.set('open', state.toString());
    }

    toggleDrawer() {
        this.open = !this.open;
    }
}