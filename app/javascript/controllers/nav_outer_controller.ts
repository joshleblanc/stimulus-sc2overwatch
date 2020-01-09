import { Controller } from 'stimulus';

// This entire controller is a dumb solution to the fact
// that .mdc-drawer-app-content has to be a direct sibling of .mdc-drawer
// So we can't both have turbolinks cache the drawer, *and* have a dismissable drawer,
// because the app content can't be in the nav-controller so it isn't cached
export default class extends Controller {
    static targets = [ "content", "inner" ];
    readonly contentTarget: HTMLElement;

    initialize() {
        if(localStorage.getItem('drawerOpen') === "true") {
            this.toggleOffset(true);
        }
    }

    toggleOffset(state) {
        this.contentTarget.classList.toggle('drawer-offset', state);
    }

    offsetContent(e) {
        this.toggleOffset(e.detail);
    }
}