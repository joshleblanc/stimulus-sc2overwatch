import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "input" ];

    upload() {
        const formData = new FormData();
        formData.append('file', this.file);
        fetch(this.data.get('url'), {
            method: 'POST',
            body: formData
        }).then(resp => resp.json())
          .then(json => console.log(json));
    }

    get file() {
        return this.inputTarget.files[0];
    }
}