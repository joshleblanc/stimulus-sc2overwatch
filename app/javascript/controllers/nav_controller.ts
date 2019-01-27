import {Controller} from 'stimulus';
import {drawer, list, ripple} from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'list', 'navbar', 'search' ];
    readonly drawerTarget: HTMLElement;
    readonly listTarget: HTMLElement;
    readonly navbarTarget: HTMLElement;
    readonly searchTarget: HTMLElement;
    readonly stepTargets: Array<HTMLElement>;
    drawer: drawer.MDCDrawer;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        const l = new list.MDCList(this.listTarget);
        l.wrapFocus = true;
        this.drawer.listen('MDCDrawer:closed', () => {
            this.drawerOpen = false;
        });
        this.drawer.list_.singleSelection = true;
        this.showNavbar();
        this.setDrawerState();
        window.addEventListener('keyup', e => {
            if(e.key === 'Escape') {
                this.searchOpen = false;
            }
        })
    }

    itemClicked() {
        this.drawerOpen = false;
    }

    showNavbar() {
        this.navbarTarget.classList.toggle('hide', this.searchOpen);
        this.searchTarget.classList.toggle('hide', !this.searchOpen);
    }

    toggleSearch() {
        this.searchOpen = !this.searchOpen;
    }

    setDrawerState() {
        this.drawer.open = this.drawerOpen;
    }

    get drawerOpen() {
        return this.data.get('open') === "true";
    }

    get searchOpen() {
        return this.data.get('searchOpen') === 'true';
    }

    set searchOpen(b) {
        this.data.set('searchOpen', b.toString());
        this.showNavbar();
    }

    set drawerOpen(state) {
        this.data.set('open', state.toString());
        this.setDrawerState();
    }

    toggleDrawer() {
        this.drawerOpen = !this.drawerOpen;
    }
}