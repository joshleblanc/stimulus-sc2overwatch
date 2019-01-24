import { Controller } from 'stimulus';
import { drawer, list } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'list' ];
    readonly drawerTarget: HTMLElement;
    readonly listTarget: HTMLElement;
    drawer: drawer.MDCDrawer;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        const l = new list.MDCList(this.listTarget);
        l.wrapFocus = true;
        this.drawer.listen('MDCDrawer:closed', () => {
            this.open = false;
        });
        this.drawer.list_.singleSelection = true;
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